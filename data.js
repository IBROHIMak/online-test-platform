// Test Data - Multiple Subjects

const testData = {
    ielts: {
        title: "IELTS Academic Reading Test",
        duration: 60,
        questions: [
            {
                id: 1,
                question: "The passage discusses the phenomenon of 'linguistic relativity,' which suggests that the structure of a language affects its speakers' cognition. Which statement best reflects this concept?",
                options: [
                    "Language has no impact on thought processes",
                    "The language we speak influences how we perceive reality",
                    "All languages express ideas identically",
                    "Cognition develops independently of language"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "According to the text on climate adaptation, what is the primary challenge facing coastal communities? 'Rising sea levels, coupled with increased storm intensity, pose existential threats to low-lying regions.'",
                options: [
                    "Economic development",
                    "Population growth",
                    "Environmental displacement due to sea level rise",
                    "Agricultural productivity"
                ],
                correct: 2
            },
            {
                id: 3,
                question: "The author's use of the term 'paradigm shift' in the context of renewable energy suggests:",
                options: [
                    "A minor adjustment in energy policy",
                    "A fundamental transformation in how society produces and consumes energy",
                    "A temporary change in energy prices",
                    "An incremental improvement in technology"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "In academic discourse, what distinguishes 'correlation' from 'causation'?",
                options: [
                    "They are synonymous terms",
                    "Correlation implies a relationship; causation implies one variable directly affects another",
                    "Causation is weaker than correlation",
                    "Correlation requires experimental evidence"
                ],
                correct: 1
            },
            {
                id: 5,
                question: "The passage mentions 'epistemological frameworks.' This term most likely refers to:",
                options: [
                    "Physical structures",
                    "Systems of knowledge and understanding",
                    "Statistical methods",
                    "Architectural designs"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "Which transition word indicates a contrasting viewpoint? 'The initial hypothesis was promising; _____, subsequent experiments yielded contradictory results.'",
                options: [
                    "Furthermore",
                    "Nevertheless",
                    "Consequently",
                    "Similarly"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "The text describes a 'longitudinal study.' This methodology involves:",
                options: [
                    "Observing subjects over an extended period",
                    "Conducting a single observation",
                    "Comparing different populations simultaneously",
                    "Analyzing historical documents"
                ],
                correct: 0
            },
            {
                id: 8,
                question: "What does the phrase 'methodological rigor' imply in research contexts?",
                options: [
                    "Flexible research approaches",
                    "Strict adherence to systematic and precise research methods",
                    "Rapid data collection",
                    "Simplified procedures"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "The author argues that 'technological determinism' is reductionist. This suggests the author believes:",
                options: [
                    "Technology solely determines social change",
                    "The relationship between technology and society is more complex than simple cause-effect",
                    "Technology has no social impact",
                    "Social factors are irrelevant"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "In the passage about biodiversity, 'endemic species' refers to:",
                options: [
                    "Species found worldwide",
                    "Species native to and restricted to a particular geographic area",
                    "Endangered species",
                    "Domesticated species"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "The text discusses 'anthropogenic factors' contributing to environmental degradation. 'Anthropogenic' means:",
                options: [
                    "Natural",
                    "Human-caused",
                    "Geological",
                    "Atmospheric"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "According to the passage on cognitive psychology, 'metacognition' refers to:",
                options: [
                    "Basic memory processes",
                    "Thinking about one's own thinking processes",
                    "Emotional responses",
                    "Sensory perception"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "The author employs 'juxtaposition' to:",
                options: [
                    "Separate unrelated ideas",
                    "Place contrasting elements side by side for comparative effect",
                    "Eliminate contradictions",
                    "Simplify complex concepts"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "In the context of economic theory, 'externalities' are:",
                options: [
                    "Foreign investments",
                    "Costs or benefits affecting third parties not involved in a transaction",
                    "Export revenues",
                    "International trade agreements"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "The passage mentions 'hegemonic discourse.' This concept relates to:",
                options: [
                    "Minority viewpoints",
                    "Dominant narratives that shape societal understanding",
                    "Scientific objectivity",
                    "Linguistic diversity"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "What is the function of a 'null hypothesis' in research?",
                options: [
                    "To prove the research question",
                    "To assume no relationship exists between variables being tested",
                    "To eliminate all variables",
                    "To confirm the alternative hypothesis"
                ],
                correct: 1
            },
            {
                id: 17,
                question: "The text describes 'symbiotic relationships' in ecosystems. This term indicates:",
                options: [
                    "Competitive interactions",
                    "Mutually beneficial interactions between different species",
                    "Predator-prey dynamics",
                    "Isolated species behavior"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "In academic writing, 'hedging language' serves to:",
                options: [
                    "Make absolute claims",
                    "Express caution and acknowledge limitations in claims",
                    "Strengthen arguments unconditionally",
                    "Eliminate uncertainty"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "The passage discusses 'ontological assumptions.' These concern:",
                options: [
                    "Research methods",
                    "The nature of reality and existence",
                    "Statistical analysis",
                    "Data collection techniques"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "According to the text on urbanization, 'gentrification' typically results in:",
                options: [
                    "Decreased property values",
                    "Displacement of lower-income residents due to rising costs",
                    "Improved social equality",
                    "Reduced urban development"
                ],
                correct: 1
            },
            {
                id: 21,
                question: "The author's tone when discussing 'neoliberal economic policies' can best be described as:",
                options: [
                    "Enthusiastically supportive",
                    "Critically analytical",
                    "Completely neutral",
                    "Dismissively hostile"
                ],
                correct: 1
            },
            {
                id: 22,
                question: "In the passage about artificial intelligence, 'machine learning algorithms' are distinguished from traditional programming by:",
                options: [
                    "Being slower",
                    "Their ability to improve performance through experience without explicit programming",
                    "Using less data",
                    "Being simpler to implement"
                ],
                correct: 1
            },
            {
                id: 23,
                question: "The text mentions 'intersectionality' in social theory. This concept addresses:",
                options: [
                    "Road infrastructure",
                    "How multiple social identities overlap and create unique experiences of discrimination",
                    "Mathematical intersections",
                    "Geographic boundaries"
                ],
                correct: 1
            },
            {
                id: 24,
                question: "According to the passage, 'confirmation bias' affects research by:",
                options: [
                    "Improving objectivity",
                    "Leading researchers to favor information that confirms preexisting beliefs",
                    "Eliminating errors",
                    "Accelerating discovery"
                ],
                correct: 1
            },
            {
                id: 25,
                question: "The author uses 'dialectical reasoning' to:",
                options: [
                    "Present only one perspective",
                    "Examine contradictions and synthesize opposing viewpoints",
                    "Avoid complex arguments",
                    "Simplify conclusions"
                ],
                correct: 1
            },
            {
                id: 26,
                question: "In the context of global health, 'epidemiological transition' refers to:",
                options: [
                    "Disease outbreaks",
                    "Shifts in disease patterns as societies develop economically",
                    "Medical technology",
                    "Healthcare costs"
                ],
                correct: 1
            },
            {
                id: 27,
                question: "The passage discusses 'postcolonial theory.' This framework primarily examines:",
                options: [
                    "Ancient civilizations",
                    "The lasting impacts of colonialism on cultures and societies",
                    "Modern architecture",
                    "Economic growth"
                ],
                correct: 1
            },
            {
                id: 28,
                question: "What does 'statistical significance' indicate in research findings?",
                options: [
                    "The research is important",
                    "Results are unlikely to have occurred by chance alone",
                    "The sample size was large",
                    "The research was expensive"
                ],
                correct: 1
            },
            {
                id: 29,
                question: "The text mentions 'circular economy' principles. These advocate for:",
                options: [
                    "Linear production models",
                    "Minimizing waste through reuse and recycling systems",
                    "Increased consumption",
                    "Disposable products"
                ],
                correct: 1
            },
            {
                id: 30,
                question: "In academic discourse, 'operationalization' means:",
                options: [
                    "Surgical procedures",
                    "Defining abstract concepts in measurable terms",
                    "Business operations",
                    "Mathematical operations"
                ],
                correct: 1
            },
            {
                id: 31,
                question: "The passage describes 'quantum entanglement' in physics. This phenomenon involves:",
                options: [
                    "Classical mechanics",
                    "Particles remaining connected regardless of distance",
                    "Chemical bonding",
                    "Gravitational forces"
                ],
                correct: 1
            },
            {
                id: 32,
                question: "According to the text on linguistics, 'morphology' studies:",
                options: [
                    "Sentence structure",
                    "The internal structure of words",
                    "Sound systems",
                    "Meaning in context"
                ],
                correct: 1
            },
            {
                id: 33,
                question: "The author's reference to 'Occam's Razor' suggests a preference for:",
                options: [
                    "Complex explanations",
                    "The simplest explanation with fewest assumptions",
                    "Multiple competing theories",
                    "Elaborate hypotheses"
                ],
                correct: 1
            },
            {
                id: 34,
                question: "In the passage about neuroscience, 'neuroplasticity' refers to:",
                options: [
                    "Brain surgery",
                    "The brain's ability to reorganize and form new neural connections",
                    "Brain size",
                    "Cognitive decline"
                ],
                correct: 1
            },
            {
                id: 35,
                question: "The text discusses 'algorithmic bias.' This concern relates to:",
                options: [
                    "Computer speed",
                    "Systematic errors in automated systems that create unfair outcomes",
                    "Programming languages",
                    "Hardware limitations"
                ],
                correct: 1
            },
            {
                id: 36,
                question: "According to the passage, 'cultural relativism' posits that:",
                options: [
                    "All cultures are identical",
                    "Cultural practices should be understood within their own context",
                    "Western culture is superior",
                    "Culture is irrelevant"
                ],
                correct: 1
            },
            {
                id: 37,
                question: "The author mentions 'peer review' as essential because it:",
                options: [
                    "Speeds up publication",
                    "Provides expert evaluation to ensure research quality and validity",
                    "Reduces costs",
                    "Eliminates all errors"
                ],
                correct: 1
            },
            {
                id: 38,
                question: "In the context of philosophy, 'empiricism' emphasizes:",
                options: [
                    "Pure reason",
                    "Knowledge derived from sensory experience",
                    "Innate ideas",
                    "Religious revelation"
                ],
                correct: 1
            },
            {
                id: 39,
                question: "The passage discusses 'tipping points' in climate science. These represent:",
                options: [
                    "Gradual changes",
                    "Critical thresholds beyond which rapid, irreversible changes occur",
                    "Seasonal variations",
                    "Predictable patterns"
                ],
                correct: 1
            },
            {
                id: 40,
                question: "According to the text, 'interdisciplinary research' is valuable because it:",
                options: [
                    "Focuses on single disciplines",
                    "Integrates insights from multiple fields to address complex problems",
                    "Simplifies research questions",
                    "Reduces collaboration"
                ],
                correct: 1
            }
        ]
    },
    it: {
        title: "IT va Dasturlash Testi",
        duration: 60,
        questions: [
            {
                id: 1,
                question: "HTML nima uchun ishlatiladi?",
                options: ["Veb sahifalarni tuzish uchun", "Ma'lumotlar bazasini boshqarish uchun", "Rasmlarni tahrirlash uchun", "Videolarni ko'rish uchun"],
                correct: 0
            },
            {
                id: 2,
                question: "Binary search algoritmi qanday murakkablikka ega?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                correct: 1
            },
            {
                id: 3,
                question: "OOP da encapsulation nima?",
                options: ["Ma'lumotlarni yashirish", "Ko'p obyektlar yaratish", "Vorislik", "Metodlarni ortiqcha yuklash"],
                correct: 0
            },
            {
                id: 4,
                question: "SQL nima uchun ishlatiladi?",
                options: ["Veb sahifa yaratish", "Ma'lumotlar bazasini boshqarish", "Rasm tahrirlash", "Video montaj"],
                correct: 1
            },
            {
                id: 5,
                question: "Stack ma'lumotlar strukturasi qanday ishlaydi?",
                options: ["FIFO", "LIFO", "Random access", "Sequential access"],
                correct: 1
            },
            {id: 6, question: "CSS nima uchun kerak?", options: ["Sahifa strukturasi", "Sahifa dizayni", "Interaktivlik", "Ma'lumotlar bazasi"], correct: 1},
            {id: 7, question: "Git'da commit nima?", options: ["git push", "git save", "git commit", "git add"], correct: 2},
            {id: 8, question: "API nima?", options: ["Dasturlash tili", "Dasturlar o'rtasida aloqa", "Ma'lumotlar bazasi", "Brauzer"], correct: 1},
            {id: 9, question: "HTTP GET metodi nima uchun?", options: ["Yuborish", "Yangilash", "Olish", "O'chirish"], correct: 2},
            {id: 10, question: "JavaScript'da '==' va '===' farqi?", options: ["Farq yo'q", "=== turi ham tekshiradi", "== tezroq", "=== eskirgan"], correct: 1},
            {id: 11, question: "MVC nima?", options: ["Model View Controller", "Multiple View Components", "Main Visual Content", "Modern Version Control"], correct: 0},
            {id: 12, question: "Constructor nima uchun?", options: ["Yo'q qilish", "Yaratish va boshlang'ich qiymat", "Nusxalash", "Solishtirish"], correct: 1},
            {id: 13, question: "PRIMARY KEY nima?", options: ["Birinchi ustun", "Noyob identifikator", "Muhim ma'lumot", "Parol"], correct: 1},
            {id: 14, question: "Responsive dizayn nima?", options: ["Tez yuklash", "Turli ekranlarga moslashish", "Interaktivlik", "Animatsiya"], correct: 1},
            {id: 15, question: "Quick Sort murakkabligi?", options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"], correct: 1},
            {id: 16, question: "async/await nima uchun?", options: ["Sinxron kod", "Asinxron operatsiyalar", "Tsikllar", "O'zgaruvchilar"], correct: 1},
            {id: 17, question: "DNS nima?", options: ["Data Network System", "Domain Name System", "Digital Network Service", "Direct Name Server"], correct: 1},
            {id: 18, question: "NoSQL afzalligi?", options: ["Strukturalangan ma'lumotlar", "Kengayish va moslashuvchanlik", "Kam xotira", "Tezlik"], correct: 1},
            {id: 19, question: "REST API nima?", options: ["Representational State Transfer", "Remote System Technology", "Rapid Execution Service", "Resource Execution"], correct: 0},
            {id: 20, question: "Callback funksiya nima?", options: ["Serverni chaqirish", "Argument sifatida beriladigan funksiya", "Debug funksiya", "Optimizatsiya"], correct: 1},
            {id: 21, question: "Big O notation nima uchun?", options: ["Kod sifati", "Algoritm samaradorligi", "O'zgaruvchi nomlash", "Xatolarni topish"], correct: 1},
            {id: 22, question: "HTTP 404 nima?", options: ["Server xatosi", "Sahifa topilmadi", "Ruxsat yo'q", "Vaqt tugadi"], correct: 1},
            {id: 23, question: "Hoisting nima?", options: ["Ishlab chiqarishga o'tkazish", "E'lonlarni yuqoriga ko'tarish", "Optimallash", "Siqish"], correct: 1},
            {id: 24, question: "Agile'da sprint nima?", options: ["Tez kodlash", "Vaqt oralig'i", "Test turi", "Deploy"], correct: 1},
            {id: 25, question: "DRY printsipi?", options: ["Do Repeat Yourself", "Don't Repeat Yourself", "Data Replication", "Dynamic Resource"], correct: 1},
            {id: 26, question: "Git nima uchun?", options: ["Versiyalarni boshqarish", "Kod o'zgarishlarini kuzatish", "Sifatni tekshirish", "Deploy"], correct: 1},
            {id: 27, question: "JSON nima?", options: ["Dasturlash tili", "Ma'lumot formati", "Ma'lumotlar bazasi", "Server"], correct: 1},
            {id: 28, question: "React.js nima?", options: ["Ma'lumotlar bazasi", "JavaScript kutubxonasi", "Server", "Dasturlash tili"], correct: 1},
            {id: 29, question: "Cookie va Session farqi?", options: ["Farq yo'q", "Cookie client-side, Session server-side", "Session tezroq", "Cookie xavfsizroq"], correct: 1},
            {id: 30, question: "Rekursiya nima?", options: ["Tsikl", "Funksiya o'zini chaqirishi", "Ma'lumot turi", "Xatolik"], correct: 1},
            {id: 31, question: "HTTPS'dagi S?", options: ["Speed", "Secure", "Server", "System"], correct: 1},
            {id: 32, question: "Array va Linked List farqi?", options: ["Farq yo'q", "Array ketma-ket, Linked List tarqoq", "Array sekin", "Linked List kichik"], correct: 1},
            {id: 33, question: "npm nima?", options: ["Dasturlash tili", "Node Package Manager", "Ma'lumotlar bazasi", "Brauzer"], correct: 1},
            {id: 34, question: "Debugging nima?", options: ["Kod yozish", "Xatolarni topish va tuzatish", "Kod o'chirish", "Nusxalash"], correct: 1},
            {id: 35, question: "Cloud computing nima?", options: ["Bulutli ob-havo", "Internet orqali hisoblash resurslari", "Dasturlash tili", "Ma'lumotlar bazasi"], correct: 1},
            {id: 36, question: "Open source nima?", options: ["Bepul dastur", "Manba kodi ochiq dastur", "Tez dastur", "Yangi dastur"], correct: 1},
            {id: 37, question: "Polymorphism nima?", options: ["Ko'p shakllilik", "Yashirish", "Vorislik", "Abstraksiya"], correct: 0},
            {id: 38, question: "Deadlock nima?", options: ["Tez ishlash", "Resurslar uchun kutish holati", "Xotira tozalash", "Kod optimizatsiya"], correct: 1},
            {id: 39, question: "Microservices arxitekturasi?", options: ["Bitta katta dastur", "Kichik mustaqil servislar", "Monolitik dastur", "Desktop dastur"], correct: 1},
            {id: 40, question: "Docker nima?", options: ["Dasturlash tili", "Konteynerizatsiya platformasi", "Ma'lumotlar bazasi", "Veb server"], correct: 1}
        ]
    },
    mathematics: {
        title: "Matematika (Oliy Daraja)",
        duration: 70,
        questions: [
            {id: 1, question: "∫(2x + 3)dx integralni hisoblang", options: ["x² + 3x + C", "2x² + 3x + C", "x² + 3 + C", "2x + 3x + C"], correct: 0},
            {id: 2, question: "lim(x→0) (sin x)/x ning qiymati nechaga teng?", options: ["0", "1", "∞", "Mavjud emas"], correct: 1},
            {id: 3, question: "Matritsaning determinanti qachon 0 ga teng bo'ladi?", options: ["Hech qachon", "Matritsaning rangi to'liq bo'lmaganda", "Har doim", "Faqat 2x2 matritsalarda"], correct: 1},
            {id: 4, question: "f(x) = x³ - 3x² + 2 funksiyaning ekstremum nuqtalari sonini toping", options: ["0", "1", "2", "3"], correct: 2},
            {id: 5, question: "Kompleks son i² ning qiymati nima?", options: ["1", "-1", "i", "0"], correct: 1},
            {id: 6, question: "Taylor qatori nima uchun ishlatiladi?", options: ["Funksiyani polinomlar yig'indisi sifatida ifodalash", "Integrallash", "Differensiallash", "Limitlar topish"], correct: 0},
            {id: 7, question: "Vektor ko'paytmasi (cross product) natijasi nima?", options: ["Skalar", "Vektor", "Matrisa", "Kompleks son"], correct: 1},
            {id: 8, question: "e^(iπ) + 1 = ? (Eyler formulasi)", options: ["0", "1", "e", "π"], correct: 0},
            {id: 9, question: "Laplace transformatsiyasi qayerda qo'llaniladi?", options: ["Differensial tenglamalarni yechishda", "Integrallashda", "Limitlarda", "Matritsalarda"], correct: 0},
            {id: 10, question: "Furye qatori nimani ifodalaydi?", options: ["Funksiyani trigonometrik funksiyalar yig'indisi sifatida", "Polinomlar", "Logarifmlar", "Eksponentlar"], correct: 0},
            {id: 11, question: "Gradient vektori nimani ko'rsatadi?", options: ["Funksiyaning eng tez o'sish yo'nalishi", "Funksiyaning minimumi", "Funksiyaning maksimumi", "Funksiyaning noli"], correct: 0},
            {id: 12, question: "Stokes teoremasi nimani bog'laydi?", options: ["Sirt va chiziqli integrallarni", "Hajm va sirt integrallarni", "Ikki va uch o'lchovli integrallarni", "Limitlar va hosilalarni"], correct: 0},
            {id: 13, question: "Xos qiymatlar (eigenvalues) qayerda muhim?", options: ["Chiziqli algebra va differensial tenglamalarda", "Faqat geometriyada", "Faqat statistikada", "Faqat arifmetikada"], correct: 0},
            {id: 14, question: "Cauchy-Riemann shartlari nimani tekshiradi?", options: ["Funksiyaning analitikligini", "Funksiyaning uzluksizligini", "Funksiyaning chegaralanganligini", "Funksiyaning monotonligini"], correct: 0},
            {id: 15, question: "Green teoremasi qaysi integrallarni bog'laydi?", options: ["Ikki o'lchovli sohada chiziqli va ikki karrali integrallarni", "Uch o'lchovli integrallarni", "Bir o'lchovli integrallarni", "Sirt integrallarni"], correct: 0},
            {id: 16, question: "Jacobian matritsasi nima uchun kerak?", options: ["O'zgaruvchilar almashtirish", "Determinant hisoblash", "Xos qiymatlar topish", "Matritsani teskari aylantirish"], correct: 0},
            {id: 17, question: "Konvergent qator nima?", options: ["Yig'indisi chekli bo'lgan qator", "Yig'indisi cheksiz bo'lgan qator", "Hadlari kamayuvchi qator", "Hadlari o'suvchi qator"], correct: 0},
            {id: 18, question: "Lagrange ko'paytuvchilari usuli nimani topishda ishlatiladi?", options: ["Cheklovlar ostida ekstremumlarni", "Oddiy ekstremumlarni", "Integrallarni", "Hosilalarni"], correct: 0},
            {id: 19, question: "Dirac delta funksiyasi qanday xususiyatga ega?", options: ["Faqat 0 da cheksiz, boshqa joyda 0", "Hamma joyda 1", "Hamma joyda 0", "Chiziqli funksiya"], correct: 0},
            {id: 20, question: "Banach fazosi nima?", options: ["To'liq normalanuvchi vektor fazosi", "Ichki ko'paytmali fazo", "Metrik fazo", "Topologik fazo"], correct: 0},
            {id: 21, question: "Riemann integrali qachon mavjud?", options: ["Funksiya chegaralangan va uzilish nuqtalari o'lchovi 0", "Funksiya uzluksiz", "Funksiya differensiallanuvchi", "Funksiya monoton"], correct: 0},
            {id: 22, question: "Cauchy ketma-ketligi nima?", options: ["Hadlari bir-biriga yaqinlashuvchi ketma-ketlik", "Monoton ketma-ketlik", "Chegaralangan ketma-ketlik", "O'suvchi ketma-ketlik"], correct: 0},
            {id: 23, question: "Hessian matritsasi nimani aniqlaydi?", options: ["Ikkinchi tartibli hosilalar va ekstremum turini", "Birinchi tartibli hosilalarni", "Funksiya qiymatini", "Funksiya limitini"], correct: 0},
            {id: 24, question: "Kontravaryant va kovaryant vektorlar farqi nima?", options: ["Koordinatalar o'zgarishiga nisbatan transformatsiya qilish usuli", "Uzunligi", "Yo'nalishi", "O'lchami"], correct: 0},
            {id: 25, question: "Lebesgue integrali Riemann integralidan qanday farq qiladi?", options: ["Kengroq funksiyalar sinfini qamrab oladi", "Osonroq hisoblanadi", "Faqat uzluksiz funksiyalar uchun", "Farq yo'q"], correct: 0},
            {id: 26, question: "Hilbert fazosi nima?", options: ["To'liq ichki ko'paytmali vektor fazosi", "Faqat normalanuvchi fazo", "Faqat metrik fazo", "Chekli o'lchovli fazo"], correct: 0},
            {id: 27, question: "Residue teoremasi (qoldiq teoremasi) nimaga tegishli?", options: ["Kompleks analizda kontur integrallash", "Haqiqiy analizda integrallash", "Differensial tenglamalar", "Chiziqli algebra"], correct: 0},
            {id: 28, question: "Gram-Schmidt jarayoni nima uchun?", options: ["Ortonormal bazis hosil qilish", "Determinant hisoblash", "Xos qiymatlar topish", "Matritsani diagonallashtirish"], correct: 0},
            {id: 29, question: "Parseval tenglamasi nimani bildiradi?", options: ["Signal energiyasi vaqt va chastota sohasida teng", "Furye koeffitsientlari yig'indisi", "Integral qiymati", "Hosila qiymati"], correct: 0},
            {id: 30, question: "Schwarz tengsizligi qanday?", options: ["|⟨x,y⟩| ≤ ||x|| ||y||", "|x + y| ≤ |x| + |y|", "|xy| ≤ x² + y²", "||x + y|| ≤ ||x|| + ||y||"], correct: 0}
        ]
    },
    physics: {
        title: "Fizika (Oliy Daraja)",
        duration: 70,
        questions: [
            {id: 1, question: "Schrödinger tenglamasi nimani tavsiflaydi?", options: ["Kvant holatining evolyutsiyasi", "Klassik harakat", "Elektromagnit to'lqinlar", "Termodinamik jarayonlar"], correct: 0},
            {id: 2, question: "Heisenberg noaniqlik prinsipi nimani bildiradi?", options: ["Koordinata va impulsni bir vaqtda aniq o'lchab bo'lmaydi", "Energiya saqlanadi", "Massa o'zgarmas", "Tezlik chegaralangan"], correct: 0},
            {id: 3, question: "Maxwell tenglamalari nimani tavsiflaydi?", options: ["Elektromagnit maydonlar", "Gravitatsiya", "Kuchli o'zaro ta'sir", "Zaif o'zaro ta'sir"], correct: 0},
            {id: 4, question: "E = mc² formulasida c nima?", options: ["Yorug'lik tezligi", "Issiqlik sig'imi", "Zaryad", "Kuch"], correct: 0},
            {id: 5, question: "Pauli prinsipiga ko'ra:", options: ["Ikki fermion bir xil kvant holatda bo'lolmaydi", "Bozonlar bir xil holatda bo'lishi mumkin", "Energiya saqlanadi", "Impuls saqlanadi"], correct: 0},
            {id: 6, question: "Doppler effekti nimani tavsiflaydi?", options: ["Manba harakati tufayli chastota o'zgarishi", "Yorug'likning sinishi", "Tovushning qaytishi", "Issiqlik o'tkazuvchanlik"], correct: 0},
            {id: 7, question: "Carnot sikli qaysi jarayonlardan iborat?", options: ["Ikki izotermik va ikki adiabatik", "Faqat izotermik", "Faqat izobarik", "Faqat izoxorik"], correct: 0},
            {id: 8, question: "Spin nima?", options: ["Zarraning ichki burchak momenti", "Orbital harakat", "Chiziqli tezlik", "Massa"], correct: 0},
            {id: 9, question: "Bose-Einstein kondensatsiyasi qachon sodir bo'ladi?", options: ["Juda past haroratlarda", "Yuqori haroratlarda", "Xona haroratida", "Har qanday haroratda"], correct: 0},
            {id: 10, question: "Lorentz transformatsiyasi nimani bog'laydi?", options: ["Turli inersial sanoq sistemalaridagi koordinatalar", "Kuch va tezlanish", "Energiya va massa", "Zaryad va maydon"], correct: 0},
            {id: 11, question: "Fotoelektr effektida elektronlar chiqishi nimaga bog'liq?", options: ["Yorug'lik chastotasiga", "Faqat intensivlikka", "Faqat vaqtga", "Haroratga"], correct: 0},
            {id: 12, question: "Compton sochilishi nimani tasdiqlaydi?", options: ["Fotonning zarracha xususiyati", "Fotonning to'lqin xususiyati", "Elektronning to'lqin xususiyati", "Neytronning zarracha xususiyati"], correct: 0},
            {id: 13, question: "Termodinamikaning ikkinchi qonuni nimani bildiradi?", options: ["Entropiya ortadi", "Energiya saqlanadi", "Impuls saqlanadi", "Massa saqlanadi"], correct: 0},
            {id: 14, question: "Kvant tunnellash hodisasi nima?", options: ["Zarrachaning potensial to'siqdan o'tishi", "Elektronning sakrashi", "Fotonning yutilishi", "Neytronning parchalanishi"], correct: 0},
            {id: 15, question: "Fermi-Dirac statistikasi qaysi zarralar uchun?", options: ["Fermionlar (elektron, proton)", "Bozonlar (foton)", "Faqat neytronlar", "Faqat fotonlar"], correct: 0},
            {id: 16, question: "Lenz qoidasi nimani bildiradi?", options: ["Induksiya toki o'zgarishga qarshi yo'nalgan", "Tok kuchayadi", "Kuchlanish ortadi", "Qarshilik kamayadi"], correct: 0},
            {id: 17, question: "Planck doimiysi (h) qaysi formulada?", options: ["E = hν", "E = mc²", "F = ma", "pV = nRT"], correct: 0},
            {id: 18, question: "Kvant maydon nazariyasi nimani birlashtiradi?", options: ["Kvant mexanikasi va maxsus nisbiylik", "Klassik mexanika va termodinamika", "Elektrodinamika va optika", "Akustika va mexanika"], correct: 0},
            {id: 19, question: "Higgs bozoni nimani beradi?", options: ["Zarralarning massasi", "Zarralarning zaryadi", "Zarralarning spini", "Zarralarning tezligi"], correct: 0},
            {id: 20, question: "Qora tananing nurlanishi qaysi qonunga bo'ysunadi?", options: ["Planck qonuni", "Nyuton qonuni", "Kulonning qonuni", "Omning qonuni"], correct: 0},
            {id: 21, question: "Supero'tkazuvchanlik qachon paydo bo'ladi?", options: ["Kritik haroratdan past", "Yuqori haroratda", "Xona haroratida", "Har qanday haroratda"], correct: 0},
            {id: 22, question: "Meissner effekti nima?", options: ["Supero'tkazuvchidan magnit maydon chiqarilishi", "Magnit maydon kuchayishi", "Elektr maydon paydo bo'lishi", "Issiqlik ajralishi"], correct: 0},
            {id: 23, question: "Raman sochilishi nimani o'rganadi?", options: ["Molekulalarning tebranish spektri", "Atom yadrolari", "Elektronlar harakati", "Fotonlar yutilishi"], correct: 0},
            {id: 24, question: "Zeeman effekti nima?", options: ["Magnit maydonda spektral chiziqlarning ajralishi", "Elektr maydonda ajralish", "Bosim ta'sirida o'zgarish", "Harorat ta'sirida o'zgarish"], correct: 0},
            {id: 25, question: "Stark effekti nimaga bog'liq?", options: ["Elektr maydon ta'siri", "Magnit maydon ta'siri", "Gravitatsiya ta'siri", "Bosim ta'siri"], correct: 0},
            {id: 26, question: "Kvant o'chish (quantum decoherence) nima?", options: ["Kvant holatining klassik holatga o'tishi", "Energiya yo'qolishi", "Massa kamayishi", "Tezlik ortishi"], correct: 0},
            {id: 27, question: "CPT simmetriyasi nimani bildiradi?", options: ["Zaryad, paritet va vaqt inversiyasi", "Energiya saqlanishi", "Impuls saqlanishi", "Massa saqlanishi"], correct: 0},
            {id: 28, question: "Lamb siljishi nimani ko'rsatadi?", options: ["Kvant elektrodinamika effektlari", "Klassik effektlar", "Gravitatsion effektlar", "Termodinamik effektlar"], correct: 0},
            {id: 29, question: "Casimir effekti nimadan kelib chiqadi?", options: ["Vakuum energiyasi tebranishlari", "Gravitatsiya", "Elektromagnit nurlanish", "Issiqlik harakati"], correct: 0},
            {id: 30, question: "Hawking nurlanishi qayerda sodir bo'ladi?", options: ["Qora tuynuklar atrofida", "Yulduzlar ichida", "Planetalar yuzasida", "Kosmik fazoda"], correct: 0}
        ]
    },
    biology: {
        title: "Biologiya (Oliy Daraja)",
        duration: 70,
        questions: [
            {id: 1, question: "DNK replikatsiyasi qaysi ferment yordamida amalga oshadi?", options: ["DNK polimeraza", "RNK polimeraza", "Ligaza", "Helikaza"], correct: 0},
            {id: 2, question: "Mitoxondriya qanday meros qilinadi?", options: ["Onadan", "Otadan", "Ikkala ota-onadan", "Tasodifiy"], correct: 0},
            {id: 3, question: "Krebs sikli qayerda sodir bo'ladi?", options: ["Mitoxondriya matritsasida", "Sitoplazmada", "Yadroda", "Ribosomada"], correct: 0},
            {id: 4, question: "Transkripsiya jarayonida nima hosil bo'ladi?", options: ["mRNK", "DNK", "Oqsil", "Lipid"], correct: 0},
            {id: 5, question: "Kodon nechta nukleotiddan iborat?", options: ["3", "2", "4", "5"], correct: 0},
            {id: 6, question: "Apoptoz nima?", options: ["Dasturlashtirilgan hujayra o'limi", "Hujayra bo'linishi", "Hujayra o'sishi", "Hujayra harakati"], correct: 0},
            {id: 7, question: "Telomerlar nima?", options: ["Xromosoma uchlaridagi himoya qismlari", "Genlar", "Oqsillar", "Lipidlar"], correct: 0},
            {id: 8, question: "CRISPR-Cas9 nima uchun ishlatiladi?", options: ["Genom tahrirlash", "Oqsil sintezi", "Lipid sintezi", "Energiya ishlab chiqarish"], correct: 0},
            {id: 9, question: "Epigenetika nimani o'rganadi?", options: ["DNK ketma-ketligi o'zgarmasdan gen ifodasining o'zgarishi", "DNK mutatsiyalari", "Oqsil strukturasi", "Hujayra bo'linishi"], correct: 0},
            {id: 10, question: "Oksidlovchi fosforillanish qayerda sodir bo'ladi?", options: ["Mitoxondriya ichki membranasida", "Sitoplazmada", "Yadroda", "Endoplazmatik to'rda"], correct: 0},
            {id: 11, question: "Glikoliz natijasida nechta ATP hosil bo'ladi?", options: ["2 (sof)", "4", "36", "38"], correct: 0},
            {id: 12, question: "Plazmidlar qayerda topiladi?", options: ["Bakteriyalarda", "Faqat hayvonlarda", "Faqat o'simliklarda", "Viruslarda"], correct: 0},
            {id: 13, question: "Restriksion fermentlar nima qiladi?", options: ["DNKni ma'lum joylarda kesadi", "DNKni sintez qiladi", "Oqsil sintez qiladi", "Lipid sintez qiladi"], correct: 0},
            {id: 14, question: "Homologik rekombinatsiya qachon sodir bo'ladi?", options: ["Meyoz davomida", "Faqat mitozda", "Faqat bakteriyalarda", "Hech qachon"], correct: 0},
            {id: 15, question: "Prionlar nima?", options: ["Noto'g'ri buklangan oqsillar", "Viruslar", "Bakteriyalar", "Zamburug'lar"], correct: 0},
            {id: 16, question: "Ribozimlar nima?", options: ["Katalitik faoliyatga ega RNK", "Oqsillar", "Lipidlar", "Uglevodlar"], correct: 0},
            {id: 17, question: "Avtofagiya nima?", options: ["Hujayra o'z komponentlarini parchalashi", "Hujayra bo'linishi", "Hujayra o'sishi", "Hujayra harakati"], correct: 0},
            {id: 18, question: "Stem hujayralar qanday xususiyatga ega?", options: ["O'z-o'zini yangilash va differentsiatsiya", "Faqat bo'linish", "Faqat o'lish", "Faqat harakat"], correct: 0},
            {id: 19, question: "Immunitet xotirasini qaysi hujayralar ta'minlaydi?", options: ["Xotira T va B limfotsitlari", "Eritrotsitlar", "Trombositlar", "Neytrofillar"], correct: 0},
            {id: 20, question: "MHC molekulalari nima uchun kerak?", options: ["Antigenlarni taqdim etish", "Energiya ishlab chiqarish", "Oqsil sintezi", "Lipid sintezi"], correct: 0},
            {id: 21, question: "Klonal seleksiya nazariyasi nimani tushuntiradi?", options: ["Immunitet javobining spetsifikligini", "Hujayra bo'linishini", "Gen ifodasini", "Oqsil sintezini"], correct: 0},
            {id: 22, question: "Citokinin va auxin nima?", options: ["O'simlik gormonlari", "Hayvon gormonlari", "Bakteriya toksini", "Virus oqsili"], correct: 0},
            {id: 23, question: "Fotosistemlar qayerda joylashgan?", options: ["Xloroplast tilakoid membranasida", "Mitoxondriyada", "Yadroda", "Sitoplazmada"], correct: 0},
            {id: 24, question: "C4 o'simliklar qanday moslashgan?", options: ["Issiq va quruq sharoitlarga", "Sovuq sharoitlarga", "Suvli sharoitlarga", "Soyali sharoitlarga"], correct: 0},
            {id: 25, question: "Horizontal gen transferi qayerda keng tarqalgan?", options: ["Bakteriyalarda", "Faqat hayvonlarda", "Faqat o'simliklarda", "Hech qayerda"], correct: 0},
            {id: 26, question: "Endosimbioz nazariyasi nimani tushuntiradi?", options: ["Mitoxondriya va xloroplastning kelib chiqishi", "Yadro kelib chiqishi", "Ribosoma kelib chiqishi", "Membrana kelib chiqishi"], correct: 0},
            {id: 27, question: "Hox genlari nimani boshqaradi?", options: ["Embrion rivojlanishida tana rejasini", "Metabolizmni", "Immunitetni", "Reproduksiyani"], correct: 0},
            {id: 28, question: "Mikrobiyom nima?", options: ["Organizmda yashovchi mikroorganizmlar to'plami", "Faqat bakteriyalar", "Faqat viruslar", "Faqat zamburug'lar"], correct: 0},
            {id: 29, question: "Epigenom nima?", options: ["DNK ustidagi kimyoviy modifikatsiyalar to'plami", "Genlar to'plami", "Oqsillar to'plami", "Lipidlar to'plami"], correct: 0},
            {id: 30, question: "Kaspazalar qanday fermentlar?", options: ["Apoptozda ishtirok etuvchi proteazalar", "Lipazalar", "Amilazalar", "Nukleazalar"], correct: 0}
        ]
    },
    chemistry: {
        title: "Kimyo Testi",
        duration: 50,
        questions: [
            {id: 1, question: "Suvning kimyoviy formulasi?", options: ["H2O", "HO2", "H3O", "H2O2"], correct: 0},
            {id: 2, question: "Davriy jadvalning asoschisi?", options: ["Einstein", "Mendeleyev", "Newton", "Curie"], correct: 1},
            {id: 3, question: "pH shkala nimani o'lchaydi?", options: ["Harorat", "Bosim", "Kislotalilik", "Zichlik"], correct: 2},
            {id: 4, question: "Atomning musbat qismi?", options: ["Elektron", "Neytron", "Proton", "Pozitron"], correct: 2},
            {id: 5, question: "NaCl ning oddiy nomi?", options: ["Shakar", "Tuz", "Sirka", "Soda"], correct: 1},
            {id: 6, question: "Kislorodning atom raqami?", options: ["6", "7", "8", "9"], correct: 2},
            {id: 7, question: "Organik kimyo qaysi elementni o'rganadi?", options: ["Kislorod", "Uglerod", "Azot", "Vodorod"], correct: 1},
            {id: 8, question: "Kislota + ishqor = ?", options: ["Tuz va suv", "Gaz", "Metall", "Yog'"], correct: 0},
            {id: 9, question: "Avogadro soni?", options: ["6.02×10²²", "6.02×10²³", "6.02×10²⁴", "6.02×10²⁵"], correct: 1},
            {id: 10, question: "Eng yengil element?", options: ["Geliy", "Vodorod", "Litiy", "Berilliy"], correct: 1},
            {id: 11, question: "Oksidlanishda nima bo'ladi?", options: ["Elektronlar yo'qoladi", "Elektronlar qo'shiladi", "O'zgarmaydi", "Rang o'zgaradi"], correct: 0},
            {id: 12, question: "Katalizator nima qiladi?", options: ["To'xtatadi", "Tezlikni o'zgartiradi", "Mahsulotni o'zgartiradi", "Boshlaydi"], correct: 1},
            {id: 13, question: "Izotoplar nimada farq qiladi?", options: ["Protonlar", "Elektronlar", "Neytronlar", "Atom raqami"], correct: 2},
            {id: 14, question: "Kovalent bog'lanish qanday?", options: ["Elektronlar berish", "Umumiy foydalanish", "Ionlar tortilishi", "Metallar orasida"], correct: 1},
            {id: 15, question: "Endotermik reaksiyada?", options: ["Issiqlik ajraladi", "Issiqlik yutiladi", "O'zgarmaydi", "Bosim oshadi"], correct: 1},
            {id: 16, question: "Molekulyar massa birligi?", options: ["Gramm", "Kilogramm", "a.m.b", "Litr"], correct: 2},
            {id: 17, question: "Inert gazlar qaysi guruhda?", options: ["I", "VII", "VIII", "II"], correct: 2},
            {id: 18, question: "Elektroliz nima?", options: ["Kimyoviy reaksiya elektr toki ta'sirida", "Erish", "Bug'lanish", "Kristallanish"], correct: 0},
            {id: 19, question: "Galogenlar qaysi guruhda?", options: ["VI", "VII", "VIII", "V"], correct: 1},
            {id: 20, question: "Molar hajm (n.sh.da)?", options: ["22.4 L", "24.2 L", "20.4 L", "26.4 L"], correct: 0},
            {id: 21, question: "Redoks reaksiya nima?", options: ["Oksidlanish va qaytarilish birgalikda", "Faqat oksidlanish", "Faqat qaytarilish", "O'zgarish yo'q"], correct: 0},
            {id: 22, question: "Elektromanfiylik nima?", options: ["Elektronlarni tortish qobiliyati", "Protonlar soni", "Atom radiusi", "Ionlanish energiyasi"], correct: 0},
            {id: 23, question: "Allotropiya nima?", options: ["Turli elementlar", "Bir elementning turli shakllari", "Izotoplar", "Ionlar"], correct: 1},
            {id: 24, question: "Le Chatelier printsipi nimaga tegishli?", options: ["Kimyoviy muvozanat", "Atom tuzilishi", "Molekulyar massa", "Kristall panjara"], correct: 0},
            {id: 25, question: "Amfoter moddalar nima?", options: ["Faqat kislota", "Faqat ishqor", "Ham kislota, ham ishqor", "Neytral"], correct: 2},
            {id: 26, question: "Valentlik nima?", options: ["Bog'lanish qobiliyati", "Atom massasi", "Atom radiusi", "Elektronlar soni"], correct: 0},
            {id: 27, question: "Gidroliz reaksiyasi?", options: ["Suv bilan reaksiya", "Yonish", "Parchalanish", "Birikish"], correct: 0},
            {id: 28, question: "Polimer nima?", options: ["Kichik molekula", "Katta molekula (monomerlardan)", "Atom", "Ion"], correct: 1},
            {id: 29, question: "Oksidlovchi nima qiladi?", options: ["Elektron beradi", "Elektron oladi", "Proton beradi", "Neytron oladi"], correct: 1},
            {id: 30, question: "Gibbs energiyasi nimani ko'rsatadi?", options: ["Reaksiyaning o'z-o'zidan borishi", "Reaksiya tezligi", "Reaksiya harorati", "Reaksiya bosimi"], correct: 0}
        ]
    }
};
