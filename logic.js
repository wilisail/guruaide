// Original preparation tools; these are not official forms or eligibility decisions.
export const stages = {
 plan:{title:'Perencanaan Kinerja',short:'Perencanaan',source:'S1',intro:'Siapkan ringkasan pilihan yang akan disepakati bersama Kepala Sekolah.',fields:[
  ['duties','Tugas tambahan','Tuliskan tugas tambahan sesuai surat penugasan, apabila ada.','text',false],
  ['focus','Indikator praktik kinerja','Salin nama indikator yang Bapak/Ibu pilih pada layanan resmi.','text',true],
  ['competency','Indikator pengembangan kompetensi','Tuliskan pilihan sesuai kebutuhan pengembangan dan opsi pada akun.','text',true],
  ['behaviour','Perilaku kerja','Tuliskan pilihan perilaku kerja sesuai opsi pada akun.','text',true]
 ]},
 preparation:{title:'Diskusi Persiapan',short:'Persiapan',source:'S2',prerequisite:'Perencanaan kinerja telah disetujui Kepala Sekolah.',intro:'Susun persiapan observasi berdasarkan indikator yang sudah disepakati.',fields:[
  ['focus','Target perilaku yang dipilih','Salin minimal satu target perilaku sesuai rubrik pada akun Bapak/Ibu.','text',true],
  ['effort','Upaya mempelajari target perilaku','Jelaskan upaya yang akan dilakukan sebelum atau saat observasi.','textarea',true],
  ['timing','Jadwal observasi','Tuliskan jadwal yang sudah dibicarakan bersama Kepala Sekolah.','text',true]
 ]},
 followup:{title:'Rencana Tindak Lanjut',short:'Tindak Lanjut',source:'S2',prerequisite:'Observasi telah dilaksanakan dan hasilnya telah Bapak/Ibu baca.',intro:'Gunakan catatan observasi untuk merencanakan perbaikan praktik pembelajaran.',fields:[
  ['challenge','Tantangan yang dihadapi','Tuliskan kondisi yang benar-benar ditemukan saat praktik kinerja.','textarea',true],
  ['learning','Pilihan belajar','Tuliskan pilihan belajar melalui Ruang GTK atau sumber belajar lainnya.','text',true],
  ['goal','Tujuan tindak lanjut','Jelaskan perubahan yang ingin dicapai.','textarea',true],
  ['action','Upaya tindak lanjut','Tuliskan langkah yang akan dilakukan, bukan hasil yang belum terjadi.','textarea',true],
  ['timing','Waktu pelaksanaan','Tuliskan bulan, tanggal, atau rentang waktu yang direncanakan.','text',true],
  ['support','Dukungan yang dibutuhkan','Tuliskan dukungan dan pihak yang diharapkan membantu. Sesuaikan dengan opsi pada akun.','textarea',true]
 ]},
 reflection:{title:'Refleksi dan Evaluasi Tindak Lanjut',short:'Refleksi',source:'S2',prerequisite:'Tindak lanjut telah dilaksanakan; isian didasarkan pada pengalaman yang benar-benar terjadi.',intro:'Tuliskan hasil tindak lanjut berdasarkan kegiatan dan pengamatan yang telah dilakukan.',fields:[
  ['activity','Kegiatan yang telah dilakukan','Catat kegiatan dan waktu pelaksanaannya sebagai dasar refleksi.','textarea',true],
  ['insight','Inspirasi yang diperoleh','Apa yang Bapak/Ibu pelajari dari pelaksanaan tindak lanjut?','textarea',true],
  ['progress','Kemajuan yang dicapai','Tuliskan kemajuan berdasarkan pengamatan. Nyatakan apabila belum ada perubahan.','textarea',true],
  ['barrier','Hambatan yang ditemui','Jelaskan hambatan yang benar-benar dialami.','textarea',true],
  ['improvement','Peningkatan dalam mengatasi tantangan','Uraikan perbaikan yang sudah terjadi beserta dasar pengamatannya.','textarea',true]
 ]}
};
export const allowanceLabels={
 route:{UNKNOWN:'Belum diketahui',TPG_ASN:'TPG ASN',NON_ASN_TPG:'TPG Non-ASN / jalur PPPK Paruh Waktu yang sesuai',OTHER:'Program lainnya'},
 employment:{UNKNOWN:'Belum dipilih',PNS:'PNS',PPPK:'PPPK',PPPK_PART:'PPPK Paruh Waktu',NON_ASN:'Non-ASN'},
 issue:{data:'Data / beban mengajar belum sesuai',identity:'Identitas / satuan pendidikan tidak padan',certificate:'Sertifikasi / SIMTUN',payment:'Dana belum diterima',account:'Kendala rekening',amount:'Nominal berbeda',other:'Kendala lainnya / belum diketahui'},
 validation:{UNKNOWN:'Belum diketahui',VALID:'Valid',INVALID:'Belum valid'},
 sktp:{UNKNOWN:'Belum diketahui',ISSUED:'Sudah terbit',NOT_ISSUED:'Belum terbit'},
 sp2d:{UNKNOWN:'Belum diketahui',ISSUED:'Sudah terbit',NOT_ISSUED:'Belum terbit'},
 account:{UNKNOWN:'Belum diketahui',ACTIVE:'Dilaporkan aktif dan sesuai',DORMANT:'Dormant / tidak aktif / tertutup',MISMATCH:'Data rekening tidak sesuai'},
 received:{UNKNOWN:'Belum diperiksa',NO:'Belum diterima',YES:'Sudah diterima'}
};
const clean=v=>typeof v==='string'?v.trim():'';
export function performanceDraft(d){
 const stage=stages[d.stage]||stages.followup;
 const fields=stage.fields.map(([key,label,,,required])=>({key,label,value:clean(d[key])||(required?'[Perlu dilengkapi]':'Tidak ada yang dicatat.'),missing:required&&!clean(d[key])}));
 const missing=fields.filter(f=>f.missing).map(f=>f.label);
 if(!clean(d.period))missing.push('Periode kinerja');
 if(stage.prerequisite&&!d.prerequisite)missing.unshift('Konfirmasi prasyarat tahap');
 if(d.stage==='preparation'&&(!clean(d.className)||!clean(d.subject)))missing.push('Kelas dan mata pelajaran');
 return {title:stage.title,fields,missing,source:stage.source};
}
export function diagnoseAllowance(d){
 const known=d.route==='NON_ASN_TPG';
 const routeConfirmed=['NON_ASN_TPG','TPG_ASN'].includes(d.route);
 const sources=new Set(['S4']);const missing=[];const tasks=[];let title='Perlu melengkapi informasi kendala';let recipient='Operator sekolah atau Dinas Pendidikan untuk memastikan jalur layanan';
 if(!routeConfirmed){missing.push('Pastikan nama program dan jalur tunjangan melalui Info GTK atau Dinas Pendidikan.');tasks.push('Konfirmasikan jalur program sebelum mengikuti ketentuan penyaluran tertentu. Status kepegawaian saja belum menentukan jalur tunjangan.');}
 if(!clean(d.period))missing.push('Periode tunjangan yang sedang ditanyakan.');
 if(!clean(d.checkedAt))missing.push('Tanggal pemeriksaan status terakhir.');
 if(!clean(d.message))missing.push('Pesan atau keterangan status yang tampil; tanpa NIK, NIP, nomor rekening, atau identitas murid.');
 if(d.validation==='UNKNOWN'||!d.validation)missing.push('Status validasi pada Info GTK.');
 if(d.sktp==='UNKNOWN'||!d.sktp)missing.push('Status penerbitan SKTP untuk periode yang sama.');
 const contradiction=(d.sktp==='NOT_ISSUED'&&d.sp2d==='ISSUED')||(d.received==='YES'&&d.issue==='payment');
 if(contradiction){
  title='Periksa kembali kesesuaian periode dan status';
  tasks.push('Ada status yang perlu diperjelas. Cocokkan periode SKTP, SP2D, dan dana yang diterima sebelum menyimpulkan tahap kendala.');
 }else if(d.issue==='identity'){
  title='Perlu pemeriksaan kesesuaian identitas atau satuan pendidikan';
  recipient='Operator sekolah dan Dinas Pendidikan; BKD/BKPSDM bila terkait data kepegawaian';sources.add('S3');
  tasks.push('Bandingkan sumber data yang disebut pada pesan kendala dengan data yang benar. Catat bagian yang berbeda tanpa menyalin nomor identitas lengkap ke sini.','Minta operator atau instansi pemilik data memeriksa jalur pemadanan, termasuk Verval PTK bila sesuai jenis kendala. Rujukan pemadanan kinerja tidak otomatis menjadi ketentuan semua program tunjangan.');
 }else if(d.issue==='certificate'){
  title='Perlu pemeriksaan sumber data sertifikasi';recipient='Operator atau Dinas Pendidikan sesuai sumber data sertifikasi';sources.add('S7');
  tasks.push('Catat keterangan sertifikasi yang belum sesuai pada Info GTK/SIMTUN dan minta pemeriksaan sumber data oleh pihak berwenang.','Pastikan identitas dan data sertifikasi merujuk orang serta periode yang sama.');
 }else if(d.validation==='INVALID'||d.issue==='data'){
  title='Perlu pemeriksaan data sebelum penyaluran';recipient='Operator sekolah atau Dinas Pendidikan';
  tasks.push('Periksa rincian data yang belum valid pada Info GTK. Cocokkan penugasan, beban mengajar, dan data kepegawaian pada sumbernya.','Minta operator memeriksa pembaruan serta sinkronisasi Dapodik. Catat tanggal dan hasil tindak lanjut; jangan mengubah data hanya untuk mengejar status valid.');
 }else if(d.account==='DORMANT'||d.account==='MISMATCH'||d.issue==='account'){
  title='Perlu pemeriksaan rekening penyaluran';
  recipient=known?'Layanan resmi Kemendikdasmen atau operator Dinas Pendidikan sesuai jenis kendala':'Dinas Pendidikan untuk konfirmasi penanggung jawab rekening program';
  tasks.push('Pastikan jenis kendala rekening melalui kanal resmi bank atau program. Siapkan dokumen pendukung hanya untuk petugas yang berwenang.');
  if(known){sources.add('S6');tasks.push('Untuk jalur Non-ASN yang sesuai, FAQ membedakan rekening dormant/tertutup, nama rekening berbeda, dan penerima baru. Minta arahan layanan resmi sesuai kondisi tersebut.');}
 }else if(d.issue==='amount'){
  title='Perlu penjelasan rincian nominal penyaluran';recipient='Dinas Pendidikan atau layanan resmi program';
  tasks.push('Cocokkan periode serta riwayat pembayaran. Mintakan rincian bruto, potongan, dan kemungkinan penyesuaian pembayaran. Perbedaan nominal belum membuktikan kesalahan.');
  if(known)sources.add('S6');
 }else if(d.sktp==='ISSUED'){
  title=d.received==='YES'?'Dana dilaporkan sudah diterima':'SKTP sudah terbit; periksa tahap pembayaran';
  recipient=known?'Layanan resmi program untuk penelusuran SP2D; bank penyalur bila status transfer perlu diperiksa':'Dinas Pendidikan atau pengelola program untuk memastikan tahap pembayaran';
  if(d.received!=='YES'){
   if(d.sp2d==='UNKNOWN'||!d.sp2d)missing.push('Status dan tanggal SP2D pada bagian realisasi pembayaran, apabila tersedia.');
   if(d.sp2d==='ISSUED'&&!clean(d.sp2dDate))missing.push('Tanggal terbit SP2D.');
   tasks.push('Periksa realisasi pembayaran pada Info GTK untuk periode yang sama dan pastikan rekening tetap aktif. SKTP terbit belum membuktikan dana telah diterima.');
   if(known){sources.add('S6');tasks.push('FAQ Non-ASN membedakan validasi/penerbitan SKTP dari tahapan KPPN dan bank. Minta penelusuran tahap pembayaran yang belum jelas melalui layanan resmi.');}
   else tasks.push('Konfirmasikan mekanisme pembayaran program. Pedoman Non-ASN tidak diterapkan otomatis pada jalur lain.');
  }else tasks.push('Simpan ringkasan periode dan hasil pemeriksaan. Jika tidak ada kendala lain, tidak perlu membuat permohonan koreksi baru.');
 }else if(d.validation==='VALID'&&d.sktp==='NOT_ISSUED'){
  title='Data dilaporkan valid; SKTP belum terbit';recipient='Dinas Pendidikan atau layanan resmi program';
  tasks.push('Cocokkan status validasi dengan periode yang ditanyakan, lalu mintakan penjelasan status penerbitan SKTP.','Sertakan tanggal pemeriksaan serta tindak lanjut sebelumnya. Tidak ada tanggal pencairan yang dapat dipastikan dari status ini saja.');
 }else tasks.push('Baca rincian status untuk periode yang sama, lalu mintakan penjelasan operator sekolah atau Dinas Pendidikan.');
 if(known)sources.add('S5');
 return {title,recipient,missing,tasks,sources:[...sources],routeConfirmed,contradiction};
}
export function allowanceLetter(d,result=diagnoseAllowance(d)){
 const label=(k)=>allowanceLabels[k]?.[d[k]]||'Belum diketahui';
 return `Perihal: Permohonan Pemeriksaan Status Tunjangan\n\nYth. Petugas ${result.recipient}\n\nDengan hormat,\nSaya memohon bantuan pemeriksaan status tunjangan untuk periode ${clean(d.period)||'[lengkapi periode]'}. Berikut ringkasan berdasarkan pemeriksaan saya:\n\nJenjang: ${clean(d.level)||'[lengkapi jenjang]'}\nStatus kepegawaian: ${label('employment')}\nJalur program: ${label('route')}\nTanggal pemeriksaan: ${clean(d.checkedAt)||'[lengkapi tanggal]'}\nJenis kendala: ${label('issue')}\nStatus validasi: ${label('validation')}\nStatus SKTP: ${label('sktp')}\nStatus SP2D: ${label('sp2d')}${clean(d.sp2dDate)?` (${clean(d.sp2dDate)})`:''}\nStatus rekening: ${label('account')}\nDana: ${label('received')}\n\nKeterangan yang tampil:\n${clean(d.message)||'[lengkapi keterangan status]'}\n\nKronologi dan langkah yang telah dilakukan:\n${clean(d.chronology)||'[lengkapi kronologi dan tanggal tindak lanjut]'}\n\nMohon penjelasan mengenai tahap yang masih memerlukan pemeriksaan, bagian data yang perlu diperbaiki apabila ada, serta pihak yang berwenang menindaklanjuti. Apabila layanan yang saya hubungi belum sesuai, mohon arahan ke layanan yang tepat.\n\nDokumen pendukung akan disampaikan melalui kanal resmi sesuai kebutuhan.\nAtas perhatian dan bantuan Bapak/Ibu, saya mengucapkan terima kasih.\n\nHormat saya,\n[Nama dan kontak diisi sendiri pada kanal resmi]\n\n---\nDraf bantu Guruaide. Tinjau kesesuaian penerima, periode, fakta, dan dokumen sebelum disampaikan. Draf ini belum dikirim.`;
}
