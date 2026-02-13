// Test Data - Turli fanlar bo'yicha testlar

const testData = {
    it: {
        title: "IT va Dasturlash Testi",
        duration: 60,
        questions: [
            {
                id: 1,
                question: "HTML nima uchun ishlatiladi?",
                options: [
                    "Veb sahifalarni tuzish uchun",
                    "Ma'lumotlar bazasini boshqarish uchun",
                    "Rasmlarni tahrirlash uchun",
                    "Videolarni ko'rish uchun"
                ],
                correct: 0
            },
            {
                id: 2,
                question: "JavaScript qaysi tilda yozilgan?",
                options: [
                    "C++",
                    "Java",
                    "ECMAScript",
                    "Python"
                ],
                correct: 2
            },
            {
                id: 3,
                question: "Binary search algoritmi qanday murakkablikka ega?",
                options: [
                    "O(n)",
                    "O(log n)",
                    "O(n²)",
                    "O(1)"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "OOP da encapsulation nima?",
                options: [
                    "Ma'lumotlarni yashirish",
                    "Ko'p obyektlar yaratish",
                    "Vorislik",
                    "Metodlarni ortiqcha yuklash"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "SQL nima uchun ishlatiladi?",
                options: [
                    "Veb sahifa yaratish",
                    "Ma'lumotlar bazasini boshqarish",
                    "Rasm tahrirlash",
                    "Video montaj"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "Stack ma'lumotlar strukturasi qanday ishlaydi?",
                options: [
                    "FIFO (First In First Out)",
                    "LIFO (Last In First Out)",
                    "Random access",
                    "Sequential access"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "CSS nima uchun kerak?",
                options: [
                    "Sahifa strukturasi uchun",
                    "Sahifa dizayni uchun",
                    "Interaktivlik uchun",
                    "Ma'lumotlar bazasi uchun"
                ],
                correct: 1
            },
            {
                id: 8,
                question: "Git'da o'zgarishlarni saqlash uchun qaysi buyruq ishlatiladi?",
                options: [
                    "git push",
                    "git save",
                    "git commit",
                    "git add"
                ],
                correct: 2
            },
            {
                id: 9,
                question: "API nima?",
                options: [
                    "Dasturlash tili",
                    "Dasturlar o'rtasida aloqa interfeysi",
                    "Ma'lumotlar bazasi turi",
                    "Veb brauzer"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "HTTP GET metodi nima uchun ishlatiladi?",
                options: [
                    "Ma'lumot yuborish",
                    "Ma'lumot yangilash",
                    "Ma'lumot olish",
                    "Ma'lumot o'chirish"
                ],
                correct: 2
            },
            {
                id: 11,
                question: "JavaScript'da '==' va '===' orasidagi farq nima?",
                options: [
                    "Farq yo'q",
                    "=== turi va qiymatni tekshiradi, == faqat qiymatni",
                    "== tezroq ishlaydi",
                    "=== eskirgan"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "MVC arxitekturasida nima tushuniladi?",
                options: [
                    "Model View Controller",
                    "Multiple View Components",
                    "Main Visual Content",
                    "Modern Version Control"
                ],
                correct: 0
            },
            {
                id: 13,
                question: "Python'da ro'yxat (list) yaratish uchun qaysi belgi ishlatiladi?",
                options: [
                    "{ }",
                    "[ ]",
                    "( )",
                    "< >"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "Constructor nima uchun ishlatiladi?",
                options: [
                    "Obyektlarni yo'q qilish",
                    "Obyektlarni yaratish va boshlang'ich qiymat berish",
                    "Obyektlarni nusxalash",
                    "Obyektlarni solishtirish"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "Ma'lumotlar bazasida PRIMARY KEY nima?",
                options: [
                    "Jadvaldagi birinchi ustun",
                    "Har bir yozuv uchun noyob identifikator",
                    "Eng muhim ma'lumot",
                    "Ma'lumotlar bazasi paroli"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "Responsive dizayn nima?",
                options: [
                    "Tez yuklanadigan saytlar",
                    "Turli ekran o'lchamlariga moslashadigan saytlar",
                    "Interaktiv saytlar",
                    "Animatsiyali saytlar"
                ],
                correct: 1
            },
            {
                id: 17,
                question: "Qaysi saralash algoritmi eng yaxshi o'rtacha murakkablikka ega?",
                options: [
                    "Bubble Sort",
                    "Quick Sort",
                    "Selection Sort",
                    "Insertion Sort"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "async/await nima uchun ishlatiladi?",
                options: [
                    "Sinxron kodni boshqarish",
                    "Asinxron operatsiyalarni boshqarish",
                    "Tsikllar yaratish",
                    "O'zgaruvchilar e'lon qilish"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "DNS nima?",
                options: [
                    "Data Network System",
                    "Domain Name System",
                    "Digital Network Service",
                    "Direct Name Server"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "NoSQL ma'lumotlar bazasining asosiy afzalligi nima?",
                options: [
                    "Strukturalangan ma'lumotlar uchun yaxshi",
                    "Kengayish va moslashuvchanlik",
                    "Kamroq xotira talab qiladi",
                    "Barcha SQL bazalaridan tezroq"
                ],
                correct: 1
            },
            {
                id: 21,
                question: "REST API nima?",
                options: [
                    "Representational State Transfer",
                    "Remote System Technology",
                    "Rapid Execution Service",
                    "Resource Execution State"
                ],
                correct: 0
            },
            {
                id: 22,
                question: "PHP qaysi tomonlama dasturlash tili?",
                options: [
                    "Client-side",
                    "Server-side",
                    "Ikkala tomonlama",
                    "Ma'lumotlar bazasi tili"
                ],
                correct: 1
            },
            {
                id: 23,
                question: "Callback funksiya nima?",
                options: [
                    "Serverni qayta chaqirish",
                    "Boshqa funksiyaga argument sifatida beriladigan funksiya",
                    "Xatolarni tuzatish funksiyasi",
                    "Tezlikni oshirish funksiyasi"
                ],
                correct: 1
            },
            {
                id: 24,
                question: "CSS'da flexbox nima uchun ishlatiladi?",
                options: [
                    "Rasmlarni joylashtirish",
                    "Elementlarni moslashuvchan joylashtirish",
                    "Matnni formatlash",
                    "Ranglarni o'zgartirish"
                ],
                correct: 1
            },
            {
                id: 25,
                question: "Big O notation nima uchun ishlatiladi?",
                options: [
                    "Kod sifatini o'lchash",
                    "Algoritm samaradorligini tavsiflash",
                    "O'zgaruvchilarni nomlash",
                    "Xatolarni topish"
                ],
                correct: 1
            },
            {
                id: 26,
                question: "HTTP 404 xatoligi nimani bildiradi?",
                options: [
                    "Server xatosi",
                    "Sahifa topilmadi",
                    "Ruxsat yo'q",
                    "Vaqt tugadi"
                ],
                correct: 1
            },
            {
                id: 27,
                question: "JavaScript'da hoisting nima?",
                options: [
                    "Kodni ishlab chiqarishga o'tkazish",
                    "O'zgaruvchi va funksiya e'lonlarini yuqoriga ko'tarish",
                    "Kodni optimallash",
                    "Fayllarni siqish"
                ],
                correct: 1
            },
            {
                id: 28,
                question: "Agile metodologiyasida sprint nima?",
                options: [
                    "Tez kodlash sessiyasi",
                    "Ishlab chiqish uchun vaqt oralig'i",
                    "Test turi",
                    "Deploy jarayoni"
                ],
                correct: 1
            },
            {
                id: 29,
                question: "DRY printsipi nimani anglatadi?",
                options: [
                    "Do Repeat Yourself",
                    "Don't Repeat Yourself",
                    "Data Replication Yearly",
                    "Dynamic Resource Yielding"
                ],
                correct: 1
            },
            {
                id: 30,
                question: "Git version control sistemasi nima uchun ishlatiladi?",
                options: [
                    "Versiyalarni boshqarish",
                    "Kod o'zgarishlarini kuzatish va boshqarish",
                    "Kod sifatini tekshirish",
                    "Ilovalarni deploy qilish"
                ],
                correct: 1
            },
            {
                id: 31,
                question: "JSON nima?",
                options: [
                    "Dasturlash tili",
                    "Ma'lumot almashish formati",
                    "Ma'lumotlar bazasi",
                    "Veb server"
                ],
                correct: 1
            },
            {
                id: 32,
                question: "React.js nima?",
                options: [
                    "Ma'lumotlar bazasi",
                    "JavaScript kutubxonasi (UI uchun)",
                    "Server",
                    "Dasturlash tili"
                ],
                correct: 1
            },
            {
                id: 33,
                question: "Cookie va Session orasidagi farq nima?",
                options: [
                    "Farq yo'q",
                    "Cookie client-side, Session server-side saqlanadi",
                    "Session tezroq",
                    "Cookie xavfsizroq"
                ],
                correct: 1
            },
            {
                id: 34,
                question: "Rekursiya nima?",
                options: [
                    "Tsikl turi",
                    "Funksiya o'zini chaqirishi",
                    "Ma'lumot turi",
                    "Xatolik turi"
                ],
                correct: 1
            },
            {
                id: 35,
                question: "HTTPS'dagi 'S' harfi nimani bildiradi?",
                options: [
                    "Speed",
                    "Secure",
                    "Server",
                    "System"
                ],
                correct: 1
            },
            {
                id: 36,
                question: "Array va Linked List orasidagi asosiy farq nima?",
                options: [
                    "Farq yo'q",
                    "Array ketma-ket, Linked List tarqoq xotirada saqlanadi",
                    "Array sekinroq",
                    "Linked List kichikroq"
                ],
                correct: 1
            },
            {
                id: 37,
                question: "npm nima?",
                options: [
                    "Dasturlash tili",
                    "Node Package Manager",
                    "Ma'lumotlar bazasi",
                    "Veb brauzer"
                ],
                correct: 1
            },
            {
                id: 38,
                question: "Debugging nima?",
                options: [
                    "Kod yozish",
                    "Xatolarni topish va tuzatish",
                    "Kod o'chirish",
                    "Kod nusxalash"
                ],
                correct: 1
            },
            {
                id: 39,
                question: "Cloud computing nima?",
                options: [
                    "Bulutli ob-havo",
                    "Internet orqali hisoblash resurslari",
                    "Yangi dasturlash tili",
                    "Ma'lumotlar bazasi turi"
                ],
                correct: 1
            },
            {
                id: 40,
                question: "Open source dastur nima?",
                options: [
                    "Bepul dastur",
                    "Manba kodi ochiq bo'lgan dastur",
                    "Tez ishlaydigan dastur",
                    "Yangi dastur"
                ],
                correct: 1
            }
        ]
    },
    ielts: {
        title: "IELTS Reading Test",
        duration: 60,
        questions: [
            {
                id: 1,
                question: "IELTS test kimlar uchun mo'ljallangan?",
                options: [
                    "Faqat talabalar uchun",
                    "Ingliz tilida o'qish yoki ishlash kerak bo'lganlar uchun",
                    "Faqat o'qituvchilar uchun",
                    "Faqat tarjimonlar uchun"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "Reading: 'Climate change is one of the most pressing issues.' - 'pressing' so'zi nimani anglatadi?",
                options: [
                    "Bosim",
                    "Dolzarb, muhim",
                    "Qiyin",
                    "Yangi"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "'Substantial progress' iborasida 'substantial' so'zi qanday ma'noni bildiradi?",
                options: [
                    "Kichik",
                    "Sezilarli, muhim",
                    "Vaqtinchalik",
                    "Shubhali"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "Matnda: 'Online learning has transformed education' - muallifning munosabati qanday?",
                options: [
                    "Tanqidiy",
                    "Neytral",
                    "Ijobiy",
                    "Shubhali"
                ],
                correct: 2
            },
            {
                id: 5,
                question: "'Despite numerous challenges, the project was completed' - bu gap nimani anglatadi?",
                options: [
                    "Loyiha muvaffaqiyatsiz tugadi",
                    "Loyiha oson edi",
                    "Jamoa qiyinchiliklarni yengdi",
                    "Jadval noto'g'ri edi"
                ],
                correct: 2
            },
            {
                id: 6,
                question: "Qaysi so'z qarama-qarshilikni bildiradi?",
                options: [
                    "Furthermore",
                    "However",
                    "Therefore",
                    "Moreover"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "'Qualitative and quantitative approaches' - bu qanday tadqiqot?",
                options: [
                    "Faqat raqamli",
                    "Faqat tavsifiy",
                    "Aralash usullar",
                    "Aniq usul yo'q"
                ],
                correct: 2
            },
            {
                id: 8,
                question: "Qaysi gap grammatik jihatdan to'g'ri?",
                options: [
                    "The data shows results",
                    "The data show results",
                    "The data showing results",
                    "The data is shows results"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "'Urbanization has led to both opportunities and challenges' - muallif nuqtai nazari?",
                options: [
                    "Butunlay salbiy",
                    "Butunlay ijobiy",
                    "Muvozanatli",
                    "Befarq"
                ],
                correct: 2
            },
            {
                id: 10,
                question: "'Peer-reviewed' akademik kontekstda nimani anglatadi?",
                options: [
                    "Talabalar tomonidan ko'rib chiqilgan",
                    "Soha mutaxassislari tomonidan ko'rib chiqilgan",
                    "Ommaviy ko'rib chiqilgan",
                    "O'zi ko'rib chiqqan"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "'Technology has revolutionized communication' - qaysi dalil eng yaxshi tasdiqlaydi?",
                options: [
                    "Odamlar hali ham xat yozadi",
                    "Milliardlab odam smartfon ishlatadi",
                    "Texnologiya qimmat",
                    "Ba'zilar yuzma-yuz muloqotni afzal ko'radi"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "'Unprecedented' so'zi nimani anglatadi?",
                options: [
                    "Kutilgan",
                    "Ilgari ko'rilmagan",
                    "Oddiy",
                    "Bashorat qilinadigan"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "Birlamchi manba (primary source) ga misol?",
                options: [
                    "Tarix darsligi",
                    "Ensiklopediya",
                    "Asl tadqiqot ma'lumotlari",
                    "Sharh maqolasi"
                ],
                correct: 2
            },
            {
                id: 14,
                question: "'Sustainable development' tushunchasi asosan nimani anglatadi?",
                options: [
                    "Tez iqtisodiy o'sish",
                    "Kelajak avlodga zarar bermasdan hozirgi ehtiyojlarni qondirish",
                    "Sanoat kengayishi",
                    "Faqat shahar rivojlanishi"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "Abstract (annotatsiya) ning maqsadi nima?",
                options: [
                    "Batafsil metodologiya berish",
                    "Maqolaning qisqacha xulosasi",
                    "Barcha manbalarni sanash",
                    "Xom ma'lumotlarni taqdim etish"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "'Statistically significant (p < 0.05)' nimani bildiradi?",
                options: [
                    "Natijalar tasodifiy",
                    "Natijalar tasodifiy emas",
                    "Tadqiqot noto'g'ri",
                    "Ko'proq tadqiqot kerak"
                ],
                correct: 1
            },
            {
                id: 17,
                question: "Bo'sh joyni to'ldiring: 'The study _____ that exercise improves health'",
                options: [
                    "demonstrates",
                    "demonstrate",
                    "demonstrating",
                    "demonstrated"
                ],
                correct: 0
            },
            {
                id: 18,
                question: "'Empirical evidence' nimani anglatadi?",
                options: [
                    "Nazariy taxminlar",
                    "Shaxsiy fikrlar",
                    "Kuzatuv yoki tajribaga asoslangan dalil",
                    "Tarixiy yozuvlar"
                ],
                correct: 2
            },
            {
                id: 19,
                question: "'Notwithstanding the limitations' - 'notwithstanding' so'zi nimani bildiradi?",
                options: [
                    "Tufayli",
                    "Qaramay",
                    "Qo'shimcha",
                    "Natijasida"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "Literature review ning asosiy maqsadi nima?",
                options: [
                    "Boshqa tadqiqotchilar ishini nusxalash",
                    "Mavjud tadqiqotlarni umumlashtirish va sintez qilish",
                    "Oldingi tadqiqotlarni tanqid qilish",
                    "Asl tadqiqot qilmaslik"
                ],
                correct: 1
            },
            {
                id: 21,
                question: "'Comprehensive' so'zi qanday ma'noni anglatadi?",
                options: [
                    "Qisman",
                    "To'liq, keng qamrovli",
                    "Murakkab",
                    "Oddiy"
                ],
                correct: 1
            },
            {
                id: 22,
                question: "Academic writing'da birinchi shaxsdan foydalanish qachon to'g'ri?",
                options: [
                    "Hech qachon",
                    "Shaxsiy tajriba yoki fikrni ifodalashda",
                    "Har doim",
                    "Faqat xulosada"
                ],
                correct: 1
            },
            {
                id: 23,
                question: "'Hypothesis' nima?",
                options: [
                    "Isbotlangan fakt",
                    "Sinab ko'riladigan taxmin",
                    "Yakuniy xulosa",
                    "Tadqiqot usuli"
                ],
                correct: 1
            },
            {
                id: 24,
                question: "'Correlation does not imply causation' nimani anglatadi?",
                options: [
                    "Bog'liqlik sabab-oqibat emasligini bildiradi",
                    "Hech qanday bog'liqlik yo'q",
                    "Sabab-oqibat har doim mavjud",
                    "Statistika ishonchsiz"
                ],
                correct: 0
            },
            {
                id: 25,
                question: "Passive voice qachon ishlatiladi?",
                options: [
                    "Harakat qiluvchi noma'lum yoki muhim emas",
                    "Har doim",
                    "Hech qachon",
                    "Faqat rasmiy xatlarda"
                ],
                correct: 0
            },
            {
                id: 26,
                question: "'Methodology' bo'limida nima yoziladi?",
                options: [
                    "Natijalar",
                    "Tadqiqot usullari",
                    "Xulosalar",
                    "Manbalar"
                ],
                correct: 1
            },
            {
                id: 27,
                question: "'Plagiarism' nima?",
                options: [
                    "Yangi g'oya yaratish",
                    "Boshqaning ishini o'zingniki deb ko'rsatish",
                    "Hamkorlikda ishlash",
                    "Manbalarni keltirish"
                ],
                correct: 1
            },
            {
                id: 28,
                question: "APA va MLA nima?",
                options: [
                    "Dasturlash tillari",
                    "Iqtibos keltirish uslublari",
                    "Ma'lumotlar bazalari",
                    "Tadqiqot usullari"
                ],
                correct: 1
            },
            {
                id: 29,
                question: "'Paraphrase' nima?",
                options: [
                    "To'g'ridan-to'g'ri iqtibos",
                    "O'z so'zlaringiz bilan qayta ifodalash",
                    "Tarjima qilish",
                    "Qisqartirish"
                ],
                correct: 1
            },
            {
                id: 30,
                question: "'Thesis statement' nima?",
                options: [
                    "Dissertatsiya",
                    "Asosiy g'oya yoki argument",
                    "Xulosa",
                    "Kirish"
                ],
                correct: 1
            },
            {
                id: 31,
                question: "'Cohesion' matnda nimani ta'minlaydi?",
                options: [
                    "Uzunlik",
                    "Bog'lanish va izchillik",
                    "Murakkablik",
                    "Rasmiylik"
                ],
                correct: 1
            },
            {
                id: 32,
                question: "'Inference' nima?",
                options: [
                    "To'g'ridan-to'g'ri aytilgan ma'lumot",
                    "Matndan xulosa chiqarish",
                    "Tarjima",
                    "Iqtibos"
                ],
                correct: 1
            },
            {
                id: 33,
                question: "'Bias' tadqiqotda nimani anglatadi?",
                options: [
                    "Ob'ektivlik",
                    "Tarafkashlik, noto'g'ri yo'nalish",
                    "Aniqlik",
                    "Tezlik"
                ],
                correct: 1
            },
            {
                id: 34,
                question: "'Validity' nima?",
                options: [
                    "Tadqiqot qanchalik to'g'ri o'lchaganini ko'rsatadi",
                    "Tadqiqot qanchalik tez bajarilgani",
                    "Tadqiqot qanchalik qimmat",
                    "Tadqiqot qanchalik yangi"
                ],
                correct: 0
            },
            {
                id: 35,
                question: "'Reliability' nimani bildiradi?",
                options: [
                    "Tadqiqot natijalarining takrorlanuvchanligi",
                    "Tadqiqot tezligi",
                    "Tadqiqot narxi",
                    "Tadqiqot yangiligi"
                ],
                correct: 0
            },
            {
                id: 36,
                question: "'Sample size' nima?",
                options: [
                    "Namuna hajmi",
                    "Namuna sifati",
                    "Namuna turi",
                    "Namuna narxi"
                ],
                correct: 0
            },
            {
                id: 37,
                question: "'Control group' tadqiqotda nima?",
                options: [
                    "Boshqaruvchi guruh",
                    "Taqqoslash uchun nazorat guruhi",
                    "Eng yaxshi guruh",
                    "Eng katta guruh"
                ],
                correct: 1
            },
            {
                id: 38,
                question: "'Variable' nima?",
                options: [
                    "O'zgarmas qiymat",
                    "O'zgaruvchan omil",
                    "Doimiy",
                    "Natija"
                ],
                correct: 1
            },
            {
                id: 39,
                question: "'Conclusion' bo'limida nima bo'lishi kerak?",
                options: [
                    "Yangi ma'lumotlar",
                    "Asosiy topilmalar va xulosalar",
                    "Faqat manbalar",
                    "Faqat grafiklar"
                ],
                correct: 1
            },
            {
                id: 40,
                question: "'Peer review' jarayonining maqsadi nima?",
                options: [
                    "Tadqiqot sifatini ta'minlash",
                    "Tadqiqotni tezlashtirish",
                    "Tadqiqotni arzonlashtirish",
                    "Tadqiqotni mashhur qilish"
                ],
                correct: 0
            }
        ]
    },
    chemistry: {
        title: "Kimyo Testi",
        duration: 50,
        questions: [
            {
                id: 1,
                question: "Suvning kimyoviy formulasi qanday?",
                options: [
                    "H2O",
                    "HO2",
                    "H3O",
                    "H2O2"
                ],
                correct: 0
            },
            {
                id: 2,
                question: "Davriy jadvalning asoschisi kim?",
                options: [
                    "Albert Einstein",
                    "Dmitriy Mendeleyev",
                    "Isaac Newton",
                    "Marie Curie"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "pH shkala nimani o'lchaydi?",
                options: [
                    "Harorat",
                    "Bosim",
                    "Kislotalilik yoki ishqoriylik",
                    "Zichlik"
                ],
                correct: 2
            },
            {
                id: 4,
                question: "Atomning musbat zaryadlangan qismi?",
                options: [
                    "Elektron",
                    "Neytron",
                    "Proton",
                    "Pozitron"
                ],
                correct: 2
            },
            {
                id: 5,
                question: "NaCl ning oddiy nomi nima?",
                options: [
                    "Shakar",
                    "Tuz",
                    "Sirka",
                    "Soda"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "Kislorodning atom raqami nechchi?",
                options: [
                    "6",
                    "7",
                    "8",
                    "9"
                ],
                correct: 2
            },
            {
                id: 7,
                question: "Organik kimyo asosan qaysi elementni o'rganadi?",
                options: [
                    "Kislorod",
                    "Uglerod",
                    "Azot",
                    "Vodorod"
                ],
                correct: 1
            },
            {
                id: 8,
                question: "Kislota va ishqor reaksiyasi natijasida nima hosil bo'ladi?",
                options: [
                    "Tuz va suv",
                    "Gaz",
                    "Metall",
                    "Yog'"
                ],
                correct: 0
            },
            {
                id: 9,
                question: "Avogadro soni qanchaga teng?",
                options: [
                    "6.02 × 10²²",
                    "6.02 × 10²³",
                    "6.02 × 10²⁴",
                    "6.02 × 10²⁵"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "Eng yengil element qaysi?",
                options: [
                    "Geliy",
                    "Vodorod",
                    "Litiy",
                    "Berilliy"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "Oksidlanish reaksiyasida nima sodir bo'ladi?",
                options: [
                    "Elektronlar yo'qoladi",
                    "Elektronlar qo'shiladi",
                    "Hech narsa o'zgarmaydi",
                    "Faqat rang o'zgaradi"
                ],
                correct: 0
            },
            {
                id: 12,
                question: "Katalizator nima qiladi?",
                options: [
                    "Reaksiyani to'xtatadi",
                    "Reaksiya tezligini o'zgartiradi",
                    "Mahsulotni o'zgartiradi",
                    "Reaksiyani boshlaydi"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "Izotoplar nimada farq qiladi?",
                options: [
                    "Protonlar soni",
                    "Elektronlar soni",
                    "Neytronlar soni",
                    "Atom raqami"
                ],
                correct: 2
            },
            {
                id: 14,
                question: "Kovalent bog'lanish qanday hosil bo'ladi?",
                options: [
                    "Elektronlar berish",
                    "Elektronlarni umumiy foydalanish",
                    "Ionlar tortilishi",
                    "Metallar orasida"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "Endotermik reaksiyada nima sodir bo'ladi?",
                options: [
                    "Issiqlik ajralib chiqadi",
                    "Issiqlik yutiladi",
                    "Harorat o'zgarmaydi",
                    "Bosim oshadi"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "Molekulyar massa birligi nima?",
                options: [
                    "Gramm",
                    "Kilogramm",
                    "Atom massa birligi (a.m.b)",
                    "Litr"
                ],
                correct: 2
            },
            {
                id: 17,
                question: "Inert gazlar qaysi guruhda joylashgan?",
                options: [
                    "I guruh",
                    "VII guruh",
                    "VIII guruh",
                    "II guruh"
                ],
                correct: 2
            },
            {
                id: 18,
                question: "Elektroliz jarayonida nima sodir bo'ladi?",
                options: [
                    "Kimyoviy reaksiya elektr toki ta'sirida",
                    "Erish",
                    "Bug'lanish",
                    "Kristallanish"
                ],
                correct: 0
            },
            {
                id: 19,
                question: "Galogenlar qaysi guruhda?",
                options: [
                    "VI guruh",
                    "VII guruh",
                    "VIII guruh",
                    "V guruh"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "Molar hajm (n.sh.da) qanchaga teng?",
                options: [
                    "22.4 L",
                    "24.2 L",
                    "20.4 L",
                    "26.4 L"
                ],
                correct: 0
            },
            {
                id: 21,
                question: "Redoks reaksiya nima?",
                options: [
                    "Faqat oksidlanish",
                    "Faqat qaytarilish",
                    "Oksidlanish va qaytarilish birgalikda",
                    "Hech qanday o'zgarish yo'q"
                ],
                correct: 2
            },
            {
                id: 22,
                question: "Elektromanfiylik nima?",
                options: [
                    "Elektronlarni tortish qobiliyati",
                    "Protonlar soni",
                    "Atom radiusi",
                    "Ionlanish energiyasi"
                ],
                correct: 0
            },
            {
                id: 23,
                question: "Gibbs energiyasi nimani ko'rsatadi?",
                options: [
                    "Reaksiya tezligi",
                    "Reaksiyaning o'z-o'zidan borishini",
                    "Reaksiya harorati",
                    "Reaksiya bosimi"
                ],
                correct: 1
            },
            {
                id: 24,
                question: "Allotropiya nima?",
                options: [
                    "Turli elementlar birikishi",
                    "Bir elementning turli shakllari",
                    "Izotoplar",
                    "Ionlar"
                ],
                correct: 1
            },
            {
                id: 25,
                question: "Le Chatelier printsipi nimaga tegishli?",
                options: [
                    "Kimyoviy muvozanat",
                    "Atom tuzilishi",
                    "Molekulyar massa",
                    "Kristall panjara"
                ],
                correct: 0
            },
            {
                id: 26,
                question: "Amfoter moddalar nima?",
                options: [
                    "Faqat kislota",
                    "Faqat ishqor",
                    "Ham kislota, ham ishqor xossasiga ega",
                    "Neytral"
                ],
                correct: 2
            },
            {
                id: 27,
                question: "Valentlik nima?",
                options: [
                    "Atomning bog'lanish qobiliyati",
                    "Atom massasi",
                    "Atom radiusi",
                    "Elektronlar soni"
                ],
                correct: 0
            },
            {
                id: 28,
                question: "Gidroliz reaksiyasi nima?",
                options: [
                    "Suv bilan reaksiya",
                    "Yonish",
                    "Parchalanish",
                    "Birikish"
                ],
                correct: 0
            },
            {
                id: 29,
                question: "Polimer nima?",
                options: [
                    "Kichik molekula",
                    "Katta molekula (monomerlardan)",
                    "Atom",
                    "Ion"
                ],
                correct: 1
            },
            {
                id: 30,
                question: "Oksidlovchi nima qiladi?",
                options: [
                    "Elektron beradi",
                    "Elektron oladi",
                    "Proton beradi",
                    "Neytron oladi"
                ],
                correct: 1
            }
        ]
    }
};
