> **Catatan arsip:** Riset awal ini mendahului fokus dokumen kinerja dan tunjangan. Rekomendasi lingkup lama bukan status produk saat ini. Lihat README dan protokol terbaru. Informasi kompetisi/pendanaan harus diperiksa ulang ketika digunakan.

# GuruAdminAide: research and first pilot brief

Prepared 27 November 2026, Asia/Jakarta. This is a research brief and proposed study, not a report of completed software or measured outcomes. No applications, registrations, or outreach have been submitted.

## Decision

Develop a small, public MIT-licensed assistant that turns an existing teacher's lesson notes into the school documents that repeat those same facts. Start by validating one teaching-journal template with an SDN teacher, their principal, and the school operator. Add a periodic reflection only when the teacher confirms that their school actually requests it.

For support, pursue OpenAI research credits with a genuine university or nonprofit research collaborator. Anthropic's education partnerships are a relevant longer-term possibility; its external research grant requires a real AI safety/alignment research component. A discounted school/nonprofit plan is a paid deployment alternative.

## 1. Devpost badge eligibility

| Opportunity | Verified position on 27 November 2026 | Fit |
| --- | --- | --- |
| Learning Hackathon: Spec Driven Development | Ran 31 March–29 April 2026 and has ended. A completed application and planning artifacts earned a completion badge. | This is the original learning event the user probably remembers. It cannot accept a new entry now. [1] |
| Build With AI: Basics | Published submission window: 22 September–26 October 2026. Eligible submissions received a Learn badge. Required a new working project, the Learn Skill Pack, a public open-source repository, planning documents, and a short demo. | Excellent thematic fit, but that published round is closed. No next general round was verified. [2] |
| Learn AR with SPECS, Round 2 | Open 10 November–7 December 2026, 5 pm EST, equivalent to **8 December at 05:00 WIB**. Eligible submissions receive a Learn badge. | Requires an actual Spectacles Lens planned with the learning tools and built through CLAD/Lens Studio. Laptop preview is accepted. An ordinary teacher-admin website alone does not qualify. [3][4] |

The series may recur, but its badge is attached to an eligible submission within an event window. Completing an old tutorial is not a verified way to obtain one now. Indonesia is not among the listed country exclusions in the current SPECS rules; entrants must meet local legal adulthood and other conditions. [4]

Recommendation: do teacher interviews and background research now. Select a suitable open round before starting submission-specific implementation. Basics requires newly created work during its window: disclose prior work and do not present an existing app as newly built. If the immediate goal is specifically the current Learn badge, scope a genuine AR project separately after checking the teacher use case.

## 2. What the evidence establishes

### Indonesian evidence

**Haeri and Afriansyah, 2024 — digital workload survey.** The paper surveyed 211 teachers across 27 provinces using an online questionnaire. Of respondents, 79.1% said PMM increased administrative work, 51% did PMM tasks beyond school hours, and 70.1% reported direct institutional instructions as a reason for use. These describe the sample and the historical PMM implementation; they are not nationwide prevalence estimates for 2026. [5]

**Zafira and colleagues, July 2026 — public-school evidence.** A questionnaire study of 97 teachers in public junior secondary schools in North Padang reported high administrative workload, including e-Kinerja, Dapodik, and e-Rapor-related work. Its correlational design does not establish that administration caused a decline in teaching quality. [6]

**Dasmarni, October 2026 — recent small qualitative study.** Interviews/observations involving three madrasah teachers and one operator identified burdens from multiple applications, reduced preparation time, and fatigue. Suggested responses included simpler systems, digital skills, and colleague/operator support. This is a small local study, not evidence about every SDN. [7]

### Reforms already made

The ministry's 2025 policy materials reduced performance-management cycles to once annually, removed the requirement to upload accountability documents in that process, and removed competency-development points. In July 2026 the ministry was still collecting implementation feedback. Consequently, “nothing has ever been done” would be inaccurate. [8][9]

Performance management in Ruang GTK integrates with BKN e-Kinerja. Its official scope particularly covers eligible regional-government ASN teachers and principals, including PNS and PPPK; access by eligible non-ASN users can be optional. Administrative roles and obligations should be checked locally. Do not assume that every teacher personally operates Dapodik or that private schools have identical workflows. [10]

### Problem-to-task map

The explanations below combine the studies with product-design inference; they are hypotheses for interviews rather than a national causal diagnosis.

| Observed issue | Why it can persist | First useful response |
| --- | --- | --- |
| Rewriting an activity in several formats | A school report and a personnel record can require different structures; digitization can preserve repeated work. | Capture facts once and reuse them in teacher-approved templates. |
| Unclear or changing instructions | National simplification and local practice may diverge. | Record who requested each output and its current purpose before supporting it. |
| Searching for notes and reconstructing what happened | Working records can be scattered across messages and documents. | Store a simple dated activity record and link every draft to its source. |
| Limited connectivity and digital confidence | Learning another application and recovering from failed sessions adds effort. | Mobile web interface, saved drafts, small text inputs, and ordinary document export. |
| Time spent checking generated drafts | AI can introduce unsupported claims and therefore extra review work. | Flag missing facts and measure review/correction time as part of total workload. |

Software can reduce handling effort. Whether a school should request a particular report is a separate decision for that school and the relevant authority.

## 3. First probable task solver

**Working name:** GuruAdminAide — “Catat sekali, gunakan kembali.” This fits the user's planned GuruAdminAide section.

**First user:** an SDN class teacher with an existing teaching-journal format. Include the principal and operator in validation so the output is actually useful and responsibilities are clear.

**One complete workflow:** paste a short lesson note; review extracted facts; generate a journal entry in one agreed template; edit; export. A second reflection output is optional after confirming demand.

Example input:

> 27 November 2026, kelas 4B, matematika pecahan. Siswa latihan membandingkan pecahan memakai gambar. Sebagian masih keliru membedakan pembilang dan penyebut. Besok perlu contoh tambahan.

Expected behavior:

- Preserve the date, class, subject, activity, difficulty, and proposed follow-up.
- Ask for or flag absent fields, such as lesson duration, when the template needs them.
- Show which source passage supports each factual draft statement.
- Require teacher review before export; keep a record of edits and generation cost.
- Produce editable text/DOCX and a simple CSV journal. These are proposed outputs, not verified compatibility with government submission systems.

The prototype should not invent attendance, scores, completed training, observations, signatures, or evidence. It should work with anonymized examples; the public repository should contain synthetic data. Direct submission to government portals is outside this first build.

### Why build this when AI tools already exist?

An Indonesian school training project in 2026 used ChatGPT/Canva for teaching documents and reported improved participant knowledge. It provides local precedent, but does not establish how much net administrative time this proposed tool would save. [11]

An EEF/NFER trial involving 259 teachers in 68 English schools found a 31% reduction in time for a defined science lesson-preparation task, around 25 minutes weekly. This supports testing a bounded teacher workflow. It is not a forecast of Indonesian administrative savings. [12]

The proposed contribution is reusable local templates, traceability of factual statements, and transparent measurement of net time saved. A general model with structured extraction and templates is sufficient for an initial experiment; training a new model is unnecessary at this stage.

### Proposed pilot

Recruit 3–5 teachers, a principal, and an operator from one or two willing schools. Obtain anonymized examples and informed agreement before recording individual work. A university collaborator can help design research and handle any applicable institutional review requirements.

Compare manual work, a normal chat-based prompt, and the assistant on matched tasks, varying order to reduce learning effects. For a small pilot, publish descriptive results and limitations rather than population-wide claims.

Measure:

1. Total minutes from starting the task through correcting and exporting it.
2. Unsupported factual statements and important omissions.
3. Whether the receiving teacher/principal accepts the output, and why edits were needed.
4. Onboarding effort, connectivity failures, API cost, and whether another person inherited extra work.

Provisional success target: at least 30% lower median completion time on the selected task, no uncorrected invented facts in accepted outputs, and no increase in the principal/operator's workload. This is a target to test, not a promised result.

Planning estimate: roughly 8–14 development hours after receiving a clean template, plus 1–2 hours of interviews and a week of voluntary pilot use. Scanned forms, voice input, and portal integration would change the estimate.

## 4. Article and repository package

**Suggested article title:** “Catat Sekali, Gunakan Kembali: Menguji Asisten Terbuka untuk Administrasi Guru Indonesia.”

Publish a sourced problem statement and study protocol first. Add a results section only after measurement. The argument follows the existing workload literature: reducing effort requires both simpler requirements and better handling of the records that remain useful. The software tests the latter contribution.

Proposed repository contents:

| Item | Purpose |
| --- | --- |
| LICENSE | MIT license for project-owned code. Preserve third-party notices. |
| README.md | Problem, intended user, evidence, demo, setup, cost limits, and current status. |
| scope.md, prd.md, spec.md | Planning artifacts produced through the chosen event's required process. |
| templates/ and examples/ | Agreed blank templates and synthetic examples. |
| article.md | Public article/protocol with references and limitations. |
| evaluation/ | Tasks, scoring rubric, anonymized aggregate results when available. |

Open-source code does not provide free hosted inference or redistribute proprietary model weights. The public release should let a school choose its own supported API provider and budget.

### Draft opening for the article

Indonesian teachers' administrative workload is a documented problem, but its scope changes as policy and school practices change. A 2024 survey described substantial digital workload during PMM implementation. Government reforms subsequently simplified performance management, while newer local research continues to identify friction from administrative applications. A useful intervention therefore begins with the documents a teacher's school still needs today.

GuruAdminAide proposes a small experiment: can one factual lesson note become a usable teaching-journal entry without the teacher retyping the same information? The first version would use a teacher-approved template, highlight missing fields, and connect draft statements to the original note. Teachers would remain responsible for reviewing the final record.

The study would compare total task time, corrections, factual errors, and recipient acceptance across manual work, ordinary AI chat, and the proposed tool. Public code and synthetic examples would make the workflow inspectable and reusable. A small pilot could establish local usefulness and reveal failure modes; it could not establish effects on national teaching quality or justify retaining unnecessary paperwork. [5][7][8]

## 5. OpenAI and Anthropic support

Both providers list Indonesia among supported API locations. This establishes geographic availability, not grant acceptance; programs apply their own additional criteria. [13][14]

| Route | Benefit and fit | Eligibility and practical constraint |
| --- | --- | --- |
| OpenAI Researcher Access Program | Up to USD1,000 of API credits; generally 12 months. Strongest free-credit fit for a study of workload, factual reliability, and human–AI interaction. | Active academic/research-organization affiliation or a nonprofit conducting research. Routine nonprofit operations are excluded. The project should have a genuine research collaborator and question. [15] |
| Anthropic External Researcher Access | Normally USD1,000 in API credits; applications reviewed on the first Monday monthly. | High-priority AI safety/alignment research. Administrative automation by itself is insufficient. A real study of unsupported claims and human review may be relevant, but acceptance is uncertain. Public FAQ does not promise general education funding or specify an institutional-affiliation requirement. [17] |
| Anthropic Beneficial Deployments | Select partnerships can include credits and engineering support. Education is a stated focus. | International deployments exist, but no general self-service entitlement, fixed award, or complete public selection rubric was verified. A school/nonprofit partner and measured pilot would strengthen a proposal; this is a recommendation, not a published criterion. [18] |
| OpenAI Codex for Open Source | Selected maintainers can receive six months of Pro/Codex, conditional security access, and credits for maintenance workflows. | Adoption, ecosystem importance, and active maintenance matter. A new MIT repository alone establishes little. This supports building/maintaining software rather than an automatic teacher-app inference allowance. [20] |
| Anthropic school/nonprofit plan | **Paid alternative:** public/private K–12 schools and eligible nonprofit equivalents can apply for verification. The low/middle-income-country tier advertises USD3 per standard seat monthly. | Verify organization and country-tier qualification. Discounted Team seats currently include USD20 API credits per standard seat monthly, pooled under a USD500 cap. This combines separate plan and API-benefit documents; verify the offer at checkout. [21][22] |

OpenAI reviews research applications quarterly, including December, and says credit issuance takes 4–6 weeks after a decision. Do not rely on that grant for an immediate hackathon deadline. Its application requests the research question and planned model use. [16]

### What accepting support entails

- **OpenAI research:** use approved accounts and eligible research purposes; credits expire and cannot be transferred to a new affiliation/account. Usage policies continue to apply. The program points applicants to its publication policy, including clear AI disclosure and human responsibility for shared AI-assisted material. [15][16][19]
- **Anthropic external research:** standard public models through the API, not a Claude chat subscription, private models, or an exemption from usage rules. The award letter and credit balance should establish the exact expiry and approved scope. [17]
- **Anthropic credits generally:** no cash value or resale/transfer. Promotional credits expire when specified, or after a year when no time is specified. Enabling automatic reload authorizes paid charges. Monthly subscription credits have their own shorter expiry. [22][23]
- **Selective partnerships:** the complete contract, reporting/publicity duties, data arrangements, IP provisions, and any exclusivity were not publicly available. Obtain the proposed agreement before making commitments; do not assume either favorable or restrictive terms.
- **Codex OSS:** separate program terms allow verification, restrictions, revocation, and additional review. Benefits are personal/non-transferable. Application materials should not contain confidential information. [20]

An application-ready package should contain the prototype/demo, real collaborating institution, pilot protocol, anonymized examples, model evaluation criteria, expected request volume, and a budget tied to the experiment. A public article is useful evidence of preparation, not a substitute for affiliation or program fit.

### Other offers that need qualification

Anthropic's Teach For All collaboration gives participating educators training/community access; its Claude Lab offers Pro access and office hours. It is a network program, not a globally open API-credit entitlement. [24]

Claude Campus accepts student applicants internationally, but the published Fall 2026 cycle is closed. It is a student program with participation duties, not general funding for any public-interest developer. [25]

OpenAI's K–12 teacher plan requires employment at an accredited U.S. school/district. It should not be presented as an Indonesian teacher benefit. [26]

OpenAI's current subscriber API-credit offer covers eligible Pro and Business plans; Plus is excluded. Existing Plus access should not be treated as free app inference. [27]

## 6. Teacher conversation to use first

> Pak/Bu, administrasi apa yang masih paling banyak mengulang informasi yang sama? Kalau satu catatan mengajar bisa dipakai lagi untuk mengisi format jurnal sekolah, apakah itu membantu? Boleh kita coba dengan satu contoh yang sudah disamarkan, lalu ukur total waktunya termasuk memeriksa dan memperbaiki hasil?

Ask the teacher to identify one painful repeated task, provide its current blank template and an anonymized completed example, and identify who receives it. These answers should set the first implementation scope.

## Sources

All links were checked or retrieved during research on 27 November 2026. Some journal pages timed out; the DPR-hosted abstract and metadata were available in search results. Facts above are limited to the retrieved text.

1. [Original learning hackathon](https://learn-ai.devpost.com/).
2. [Build With AI: Basics rules](https://learn-ai-basics.devpost.com/rules).
3. [Learn AR with SPECS, current round](https://learn-specs.devpost.com/).
4. [SPECS official rules](https://learn-specs.devpost.com/rules).
5. Haeri, I. Z., & Afriansyah, A. (2024). [Eksplorasi Beban Digital Guru: Survei Pemanfaatan Platform Merdeka Mengajar (PMM) oleh Guru](https://vs-jurnal.dpr.go.id/index.php/aspirasi/article/view/4615). Aspirasi, 15(2), 189–204. DOI: 10.46807/aspirasi.v15i2.4615.
6. Zafira et al. (2026). [Public junior-secondary teacher workload study, North Padang](https://jptam.org/index.php/jptam/article/view/41880). DOI: 10.31004/jptam.v10i2.41880.
7. Dasmarni (2026). [Primary/madrasah teachers' perceptions of digital administration](https://ejournal.uin-suska.ac.id/index.php/elibtidaiy/article/view/39774). DOI: 10.24014/ejpe.v9i2.39774.
8. [Kemendikdasmen policy presentation, October 2025, page 12](https://balaibahasaprovinsintb.kemendikdasmen.go.id/uploads/eppid_dip_cUjxRxt20251023011059.pdf).
9. [Ministry implementation review announcement, 3 July 2026](https://www.kemendikdasmen.go.id/siaran-pers/15675-kemendikdasmen-himpun-masukan-untuk-perkuat-pengelolaan-kinerja-dan-mutu-pembelajaran).
10. [Official performance-management scope](https://pusatinformasi.rumahpendidikan.kemendikdasmen.go.id/hc/id/articles/46363071447833-Tentang-Pengelolaan-Kinerja).
11. [Komara et al., Indonesian teacher AI-training project](https://jurnal.um-tapsel.ac.id/index.php/martabe/article/view/25733/0).
12. [EEF/NFER lesson-preparation trial and evaluation report](https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/choices-in-edtech-using-generative-ai-chatgpt-for-ks3-science-lesson-preparation-2024-teacher-choices-trial).
13. [OpenAI API supported countries](https://developers.openai.com/api/docs/supported-countries).
14. [Claude API supported regions](https://platform.claude.com/docs/en/api/supported-regions).
15. [OpenAI Researcher Access FAQ](https://help.openai.com/en/articles/10139500-researcher-access-program-faq).
16. [OpenAI research-credit application](https://openai.com/form/researcher-access-program/).
17. [Anthropic external researcher program and application link](https://support.claude.com/en/articles/9125743-what-is-the-external-researcher-access-program).
18. [Anthropic international education/public-benefit partnership announcement](https://www.anthropic.com/news/gates-foundation-partnership).
19. [OpenAI publication policy](https://openai.com/policies/sharing-publication-policy/).
20. [Codex OSS program](https://developers.openai.com/community/codex-for-oss) and [terms](https://learn.chatgpt.com/docs/codex-for-oss-terms).
21. [Claude school/nonprofit eligibility and pricing](https://claude.com/solutions/nonprofits).
22. [Claude monthly subscriber API-credit terms and coverage](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers).
23. [Anthropic supplemental credit terms](https://www.anthropic.com/legal/credit-terms).
24. [Anthropic–Teach For All collaboration](https://www.anthropic.com/news/anthropic-teach-for-all).
25. [Claude Campus program and current cycle](https://claude.com/programs/campus).
26. [OpenAI K–12 teacher eligibility](https://chatgpt.com/plans/k12-teachers/).
27. [OpenAI subscriber API-credit eligibility](https://developers.openai.com/api/docs/guides/chatgpt-api-credits).
