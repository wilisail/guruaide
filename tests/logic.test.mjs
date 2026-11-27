import {test} from 'node:test';
import assert from 'node:assert/strict';
import {performanceDraft,diagnoseAllowance,allowanceLetter} from '../logic.js';

test('unfinished performance statements are preserved and missing facts are flagged',()=>{
 const d={stage:'followup',period:'2026',prerequisite:true,action:'Saya akan mencoba giliran berbicara.'};
 const result=performanceDraft(d);
 assert.equal(result.fields.find(f=>f.key==='action').value,d.action);
 assert.ok(result.missing.includes('Waktu pelaksanaan'));
 assert.ok(!JSON.stringify(result).includes('berhasil meningkatkan'));
});
test('reflection and preparation prerequisites remain explicit',()=>{
 assert.ok(performanceDraft({stage:'reflection'}).missing.includes('Konfirmasi prasyarat tahap'));
 assert.ok(performanceDraft({stage:'preparation',prerequisite:true}).missing.includes('Kelas dan mata pelajaran'));
});
test('employment alone does not select a benefit route or apply non-ASN payment rules',()=>{
 for(const employment of ['NON_ASN','PPPK_PART','PNS']){
  const d={employment,route:'UNKNOWN',sktp:'ISSUED',received:'NO'};
  const r=diagnoseAllowance(d);
  assert.equal(r.routeConfirmed,false);
  assert.ok(!r.sources.includes('S6'));
  assert.ok(!r.tasks.join(' ').includes('KPPN'));
 }
});
test('issued SKTP with unknown SP2D routes payment inquiry without classroom documents',()=>{
 const d={route:'NON_ASN_TPG',validation:'VALID',sktp:'ISSUED',sp2d:'UNKNOWN',received:'NO',account:'ACTIVE'};
 const r=diagnoseAllowance(d);
 assert.match(r.title,/tahap pembayaran/);
 assert.ok(r.missing.some(s=>s.includes('SP2D')));
 assert.ok(r.sources.includes('S6'));
 assert.ok(!r.tasks.join(' ').match(/RPP|nilai murid|modul ajar/));
 assert.match(allowanceLetter(d),/belum dikirim/i);
});
test('invalid source data, account issues and contradictory periods yield different actions',()=>{
 assert.match(diagnoseAllowance({route:'TPG_ASN',validation:'INVALID'}).title,/data sebelum/);
 assert.match(diagnoseAllowance({route:'NON_ASN_TPG',account:'DORMANT'}).title,/rekening/);
 assert.equal(diagnoseAllowance({sktp:'NOT_ISSUED',sp2d:'ISSUED'}).contradiction,true);
});
test('amount dispute after receipt keeps its own inquiry route',()=>{
 const r=diagnoseAllowance({route:'NON_ASN_TPG',issue:'amount',sktp:'ISSUED',received:'YES'});
 assert.match(r.title,/nominal/);
 assert.ok(r.tasks.join(' ').includes('potongan'));
});
