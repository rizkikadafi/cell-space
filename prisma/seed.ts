import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const nucleusDescription = `# Nukleus: Pusat Kendali Sel
Nukleus, atau inti sel, adalah organel terbesar dalam sel eukariotik. Nukleus berfungsi sebagai pusat kendali utama yang mengatur semua aktivitas sel, termasuk pertumbuhan, metabolisme, sintesis protein, dan reproduksi.

![Nukleus](/course/img/01-nucleus.jpg)

## Struktur Nukleus
Nukleus terdiri dari beberapa komponen utama:

1. **Membran Nukleus (Selubung Nukleus)**
   - Merupakan lapisan ganda yang mengelilingi nukleus.
   - Membran ini memiliki pori-pori yang memungkinkan pertukaran materi seperti RNA dan protein antara nukleus dan sitoplasma.

2. **Nukleoplasma**
   - Cairan di dalam nukleus yang mengandung ion, enzim, nukleotida, dan protein lain yang diperlukan untuk aktivitas nukleus.

3. **Kromatin**
   - Materi genetik yang terdiri dari DNA dan protein histon.
   - Kromatin akan memadat menjadi kromosom selama pembelahan sel.

4. **Nukleolus**
   - Struktur kecil di dalam nukleus yang berperan dalam sintesis ribosom.

## Fungsi Nukleus
1. **Mengendalikan Aktivitas Sel**
   Nukleus mengatur ekspresi gen yang menentukan fungsi dan sifat sel.

2. **Menyimpan Informasi Genetik**
   DNA di dalam nukleus menyimpan semua informasi genetik yang diwariskan ke generasi berikutnya.

3. **Sintesis RNA**
   Nukleus merupakan tempat sintesis RNA, yang kemudian diterjemahkan menjadi protein di ribosom.

4. **Reproduksi Sel**
   Nukleus memainkan peran penting dalam pembelahan sel melalui proses mitosis dan meiosis.

## Fakta Menarik tentang Nukleus
- Sebagian besar sel eukariotik memiliki satu nukleus, tetapi beberapa sel, seperti otot rangka, memiliki banyak nukleus.
- Sel darah merah dewasa pada mamalia tidak memiliki nukleus, memungkinkan lebih banyak ruang untuk hemoglobin.
`;

const mitocondriaDescription = `# Mitokondria: Pembangkit Energi Sel
Mitokondria adalah organel dalam sel eukariotik yang dikenal sebagai 'pembangkit energi' karena perannya dalam menghasilkan energi dalam bentuk ATP (adenosin trifosfat) melalui proses respirasi seluler.

![Mitokondria](/course/img/01-mitocondria.jpeg)

## Struktur Mitokondria
Mitokondria memiliki struktur unik yang terdiri dari:

1. **Membran Luar**
   - Lapisan luar yang halus dan permeabel terhadap molekul kecil.

2. **Membran Dalam**
   - Membran ini memiliki lipatan yang disebut krista untuk meningkatkan luas permukaan.
   - Tempat berlangsungnya rantai transport elektron.

3. **Matriks Mitokondria**
   - Ruang di dalam membran dalam yang mengandung enzim, ribosom, dan DNA mitokondria.

4. **Ruang Antar Membran**
   - Ruang antara membran luar dan membran dalam yang terlibat dalam pembentukan gradien proton.

## Fungsi Mitokondria
1. **Produksi Energi**
   - Mitokondria menghasilkan ATP melalui respirasi aerobik.

2. **Regulasi Metabolisme Sel**
   - Mitokondria berperan dalam metabolisme asam lemak dan asam amino.

3. **Apoptosis (Kematian Sel Terprogram)**
   - Mitokondria melepaskan protein yang memicu proses apoptosis.

4. **Penyimpanan Ion Kalsium**
   - Mitokondria membantu mengatur konsentrasi ion kalsium dalam sel.

## Fakta Menarik tentang Mitokondria
- Mitokondria memiliki DNA sendiri yang diwariskan dari ibu.
- Jumlah mitokondria dalam sel bervariasi tergantung pada kebutuhan energi; misalnya, sel otot memiliki banyak mitokondria.
- Mitokondria dipercaya berasal dari bakteri yang hidup bersimbiosis dengan nenek moyang sel eukariotik.
`;

const textDescription = `# Apa itu Sel?

Sel adalah unit struktural dan fungsional terkecil dari makhluk hidup. Semua organisme, baik itu organisme bersel tunggal seperti bakteri maupun organisme multiseluler seperti manusia, tersusun dari sel. Sel pertama kali ditemukan oleh **Robert Hooke** pada tahun 1665 ketika ia mengamati irisan tipis gabus dengan mikroskop sederhana.

![Sel di bawah mikroskop](/course/img/01-cell_under_microscope.jpg)

## Struktur Dasar Sel Sel memiliki tiga komponen utama:

1. **Membran Sel**
   Membran sel adalah lapisan tipis yang mengelilingi sel, berfungsi untuk melindungi sel dan mengatur apa yang masuk dan keluar dari sel.

2. **Sitoplasma**
   Sitoplasma adalah cairan di dalam sel tempat organel-organel sel berada. Sitoplasma berperan dalam menjaga stabilitas sel dan menjadi medium untuk berbagai reaksi kimia.

3. **Inti Sel (Nukleus)**
   Inti sel mengandung materi genetik berupa DNA yang mengontrol aktivitas sel dan pewarisan sifat.

![Struktur Dasar Sel](/course/img/01-eukaryotic_cell.jpg)

---

## Jenis-Jenis Sel
Sel dikelompokkan menjadi dua jenis utama berdasarkan struktur internalnya:

### 1. **Sel Prokariotik**
Sel prokariotik adalah sel yang tidak memiliki inti sejati. Materi genetiknya berada langsung di dalam sitoplasma. Contoh organisme dengan sel prokariotik adalah bakteri dan archaea.

#### Ciri-ciri Sel Prokariotik:
- Tidak memiliki membran inti.
- Organel sederhana, seperti ribosom.
- Umumnya berukuran kecil (1-10 μm).

![Sel Prokariotik](/course/img/01-prokaryote_cell.png)

### 2. **Sel Eukariotik**
Sel eukariotik adalah sel yang memiliki inti sejati yang dilindungi oleh membran inti. Sel ini lebih kompleks dan terdapat pada organisme seperti tumbuhan, hewan, jamur, dan protista.

#### Ciri-ciri Sel Eukariotik:
- Memiliki membran inti.
- Organel kompleks, seperti mitokondria, kloroplas (pada tumbuhan), dan aparatus Golgi.
- Umumnya berukuran lebih besar (10-100 μm).

![Sel Eukariotik](/course/img/01-eukaryotic_cell.jpg)

---

## Peran Sel dalam Kehidupan
Sel memainkan peran penting dalam berbagai aspek kehidupan, seperti:

1. **Metabolisme**
   Sel mengubah energi menjadi bentuk yang dapat digunakan oleh tubuh, misalnya melalui respirasi seluler di mitokondria.

2. **Reproduksi**
   Sel membelah untuk memperbanyak diri, baik melalui pembelahan mitosis maupun meiosis.

3. **Respons terhadap Lingkungan**
   Sel memiliki kemampuan untuk merespons rangsangan dari lingkungannya, misalnya perubahan suhu atau keberadaan zat kimia tertentu.

---

## Fakta Menarik tentang Sel
- Tubuh manusia memiliki sekitar **37,2 triliun sel**.
- Sel terkecil adalah **mikoplasma**, dengan ukuran hanya sekitar 0,2 mikrometer.
- Sel terbesar adalah **telur burung unta**, yang dapat dilihat dengan mata telanjang.

---

Sel adalah komponen fundamental yang membuat hidup mungkin. Dengan memahami sel, kita dapat lebih memahami bagaimana tubuh kita bekerja dan bagaimana makhluk hidup bertahan di dunia ini.`

const textContent = {
  main: textDescription
}

const simulationContent = {
  nucleus: nucleusDescription,
  mitocondria: mitocondriaDescription,
}

const initialCourse: Prisma.CourseCreateInput[] = [
  {
    title: 'Pengenalan Sel',
    description: 'Module yang membahas tentang sel',
    chapters: {
      create: [
        {
          title: 'Pengenalan Sel',
          materials: {
            create: [
              {
                title: 'Apa itu Sel?',
                type: 'text',
                content: textContent,
              },
              {
                title: 'Struktur Sel',
                type: 'simulation',
                content: simulationContent,
                simulation: {
                  create: {
                    scene: "sims1.splinecode"
                  }
                }

              },
            ],
          },
        },
      ],
    },
  },
]

const initialQuizzes: Prisma.QuizCreateInput[] = [
  {
    title: "Quiz: Struktur Sel",
    description: "Tes pemahaman tentang struktur sel",
    questions: {
      create: [
        {
          "text": "Siapa yang pertama kali menemukan sel dan mengamati melalui mikroskop sederhana?",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Antonie van Leeuwenhoek", "isCorrect": false },
              { "text": "Robert Hooke", "isCorrect": true },
              { "text": "Matthias Schleiden", "isCorrect": false },
              { "text": "Theodor Schwann", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Komponen utama sel yang berfungsi untuk mengatur apa yang masuk dan keluar dari sel adalah:",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Nukleus", "isCorrect": false },
              { "text": "Membran Sel", "isCorrect": true },
              { "text": "Sitoplasma", "isCorrect": false },
              { "text": "Mitokondria", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Di dalam sitoplasma terdapat struktur yang disebut organel. Organisme mana yang tidak memiliki organel yang dilapisi membran?",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Tumbuhan", "isCorrect": false },
              { "text": "Hewan", "isCorrect": false },
              { "text": "Bakteri", "isCorrect": true },
              { "text": "Jamur", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Mitokondria dikenal sebagai pusat pembangkit energi sel karena menghasilkan:",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "DNA", "isCorrect": false },
              { "text": "Glukosa", "isCorrect": false },
              { "text": "ATP", "isCorrect": true },
              { "text": "Asam amino", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Apa perbedaan utama antara sel prokariotik dan eukariotik?",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Sel prokariotik lebih besar daripada sel eukariotik.", "isCorrect": false },
              { "text": "Sel eukariotik memiliki inti sejati, sedangkan sel prokariotik tidak.", "isCorrect": true },
              { "text": "Sel prokariotik memiliki mitokondria, sedangkan sel eukariotik tidak.", "isCorrect": false },
              { "text": "Sel eukariotik hanya ditemukan pada bakteri.", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Organel yang berfungsi sebagai pusat kendali sel dan menyimpan materi genetik adalah:",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Ribosom", "isCorrect": false },
              { "text": "Nukleus", "isCorrect": true },
              { "text": "Kloroplas", "isCorrect": false },
              { "text": "Lisosom", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Sel darah merah manusia dewasa tidak memiliki organel tertentu untuk:",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Membantu pernapasan", "isCorrect": false },
              { "text": "Memuat lebih banyak hemoglobin", "isCorrect": true },
              { "text": "Melawan infeksi", "isCorrect": false },
              { "text": "Membelah diri", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Lapisan pelindung pada sel tumbuhan yang memberikan bentuk tetap dan kekuatan disebut:",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Membran Sel", "isCorrect": false },
              { "text": "Dinding Sel", "isCorrect": true },
              { "text": "Kloroplas", "isCorrect": false },
              { "text": "Sitoplasma", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Organel kecil yang terlibat dalam sintesis protein disebut:",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Mitokondria", "isCorrect": false },
              { "text": "Ribosom", "isCorrect": true },
              { "text": "Kloroplas", "isCorrect": false },
              { "text": "Aparatus Golgi", "isCorrect": false }
            ]
          }
        },
        {
          "text": "Fungsi utama kloroplas dalam sel tumbuhan adalah:",
          "type": "multipleChoice",
          "options": {
            "create": [
              { "text": "Menyimpan energi dalam bentuk ATP", "isCorrect": false },
              { "text": "Melakukan fotosintesis", "isCorrect": true },
              { "text": "Mengatur transportasi zat", "isCorrect": false },
              { "text": "Menyimpan informasi genetik", "isCorrect": false }
            ]
          }
        }
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`)
  for (const module of initialCourse) {
    const newCourse = await prisma.course.create({
      data: module,
    })
    console.log(`Created course with id: ${newCourse.id}`)
  }
  for (const quiz of initialQuizzes) {
    const newQuiz = await prisma.quiz.create({
      data: quiz,
    })
    console.log(`Created quiz with id: ${newQuiz.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
