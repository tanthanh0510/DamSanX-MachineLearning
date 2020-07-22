var data = [
    { "_id" : { "$oid" : "5f059ba8cb4e0d94acf3f9af" }, "title" : "The Complete Foundation Stock Trading Course", "img" : "https://img-a.udemycdn.com/course/240x135/1288044_d262_2.jpg", "author" : "Mohsen Hassan, bloom team", "quality" : "4.5", "member_ratting" : "18,120", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f059ba8cb4e0d94acf3f9b0" }, "title" : "Microsoft Power BI - Up & Running With Power BI Desktop", "img" : "https://img-a.udemycdn.com/course/240x135/1570206_26c6_4.jpg", "author" : "Maven Analytics, Chris Dutton, Aaron Parry", "quality" : "4.6", "member_ratting" : "20,119", "fee" : "$16.99" },
    { "_id" : { "$oid" : "5f059ba8cb4e0d94acf3f9b1" }, "title" : "MBA in a Box: Business Lessons from a CEO", "img" : "https://img-a.udemycdn.com/course/240x135/1269254_1df3_8.jpg", "author" : "365 Careers", "quality" : "4.5", "member_ratting" : "7,147", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f059ba8cb4e0d94acf3f9b2" }, "title" : "Agile Crash Course: Agile Project Management; Agile Delivery", "img" : "https://img-a.udemycdn.com/course/240x135/864146_dbd7_10.jpg", "author" : "Mauricio Rubio - Agile Guru & Founder of AgileKB | Ureducation", "quality" : "4.3", "member_ratting" : "27,428", "fee" : "$15.99" },
    { "_id" : { "$oid" : "5f059ba8cb4e0d94acf3f9b3" }, "title" : "An Entire MBA in 1 Course:Award Winning Business School Prof", "img" : "https://img-a.udemycdn.com/course/240x135/637930_9a22_19.jpg", "author" : "Chris Haroun", "quality" : "4.4", "member_ratting" : "39,580", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f059ba9cb4e0d94acf3f9b4" }, "title" : "Microsoft Excel - Excel from Beginner to Advanced", "img" : "https://img-a.udemycdn.com/course/240x135/793796_0e89.jpg", "author" : "Kyle Pew, Office Newb LLC", "quality" : "4.6", "member_ratting" : "144,628", "fee" : "$16.99" },
    { "_id" : { "$oid" : "5f059ba9cb4e0d94acf3f9b5" }, "title" : "User Experience Design Essentials - Adobe XD UI UX Design", "img" : "https://img-a.udemycdn.com/course/240x135/1452908_8741_3.jpg", "author" : "Daniel Walter Scott, Instructor HQ", "quality" : "4.6", "member_ratting" : "20,305", "fee" : "$15.99" },
    { "_id" : { "$oid" : "5f059ba9cb4e0d94acf3f9b6" }, "title" : "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp", "img" : "https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg", "author" : "Dr. Angela Yu", "quality" : "4.8", "member_ratting" : "44,596", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f059ba9cb4e0d94acf3f9b7" }, "title" : "The Complete Web Developer in 2020: Zero to Mastery", "img" : "https://img-a.udemycdn.com/course/240x135/1430746_2f43_9.jpg", "author" : "Andrei Neagoie", "quality" : "4.7", "member_ratting" : "37,414", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f059ba9cb4e0d94acf3f9b8" }, "title" : "Advanced CSS and Sass: Flexbox, Grid, Animations and More!", "img" : "https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg", "author" : "Jonas Schmedtmann", "quality" : "4.8", "member_ratting" : "22,824", "fee" : "$10.99" }
]
var dataBQ = [
    { "_id" : { "$oid" : "5f05e316213cc85baa3edd1f" }, "title" : "The Data Science Course 2020: Complete Data Science Bootcamp", "img" : "https://img-a.udemycdn.com/course/240x135/1754098_e0df_3.jpg", "author" : "365 Careers, 365 Careers Team", "quality" : "4.5", "member_ratting" : "68,687", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05e316213cc85baa3edd20" }, "title" : "Machine Learning A-Z™: Hands-On Python & R In Data Science", "img" : "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg", "author" : "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, SuperDataScience Support", "quality" : "4.5", "member_ratting" : "125,609", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd21" }, "title" : "Data Science A-Z™: Real-Life Data Science Exercises Included", "img" : "https://img-a.udemycdn.com/course/240x135/513244_b831_2.jpg", "author" : "Kirill Eremenko, SuperDataScience Team", "quality" : "4.6", "member_ratting" : "26,717", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd22" }, "title" : "Data Science: Supervised Machine Learning in Python", "img" : "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 260 145\"%3E%3C/svg%3E", "author" : "Lazy Programmer Inc.", "quality" : "4.6", "member_ratting" : "1,843", "fee" : "$119.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd23" }, "title" : "Unsupervised Deep Learning in Python", "img" : "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 260 145\"%3E%3C/svg%3E", "author" : "Lazy Programmer Inc.", "quality" : "4.5", "member_ratting" : "1,445", "fee" : "$119.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd24" }, "title" : "Deep Learning: GANs and Variational Autoencoders", "img" : "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 135\"%3E%3C/svg%3E", "author" : "Lazy Programmer Inc.", "quality" : "4.5", "member_ratting" : "1,771", "fee" : "$179.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd25" }, "title" : "Machine Learning, Data Science and Deep Learning with Python", "img" : "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 135\"%3E%3C/svg%3E", "author" : "Sundog Education by Frank Kane, Frank Kane", "quality" : "4.5", "member_ratting" : "21,487", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd26" }, "title" : "Statistics for Data Science and Business Analysis", "img" : "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 135\"%3E%3C/svg%3E", "author" : "365 Careers, 365 Careers Team", "quality" : "4.5", "member_ratting" : "15,647", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd27" }, "title" : "The Data Science Course 2020: Complete Data Science Bootcamp", "img" : "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 135\"%3E%3C/svg%3E", "author" : "365 Careers, 365 Careers Team", "quality" : "4.5", "member_ratting" : "68,687", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05e317213cc85baa3edd28" }, "title" : "Python for Data Science and Machine Learning Bootcamp", "img" : "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 135\"%3E%3C/svg%3E", "author" : "Jose Portilla", "quality" : "4.6", "member_ratting" : "80,801", "fee" : "$10.99" }
]
var dataProgramNew = [
    { "_id" : { "$oid" : "5f05ea25213cc85baa3edd2a" }, "title" : "Machine Learning, Data Science and Deep Learning with Python", "img" : "https://img-a.udemycdn.com/course/240x135/671576_a272_4.jpg", "author" : "Sundog Education by Frank Kane, Frank Kane", "quality" : "4.5", "member_ratting" : "21,487", "fee" : "$1000.99" },
    { "_id" : { "$oid" : "5f05ea25213cc85baa3edd2b" }, "title" : "Deep Learning A-Z™: Hands-On Artificial Neural Networks", "img" : "https://img-a.udemycdn.com/course/240x135/1151632_de9b.jpg", "author" : "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team", "quality" : "4.5", "member_ratting" : "31,919", "fee" : "$2000.99" },
    { "_id" : { "$oid" : "5f05ea25213cc85baa3edd2c" }, "title" : "Complete Guide to TensorFlow for Deep Learning with Python", "img" : "https://img-a.udemycdn.com/course/240x135/1326292_4dcf.jpg", "author" : "Jose Portilla", "quality" : "4.4", "member_ratting" : "14,648", "fee" : "$3000.99" },
    { "_id" : { "$oid" : "5f05ea25213cc85baa3edd2d" }, "title" : "Unsupervised Deep Learning in Python", "img" : "https://img-a.udemycdn.com/course/240x135/980086_196d_2.jpg", "author" : "Lazy Programmer Inc.", "quality" : "4.5", "member_ratting" : "1,445", "fee" : "$1190.99" },
    { "_id" : { "$oid" : "5f05ea25213cc85baa3edd2e" }, "title" : "Data Science: Supervised Machine Learning in Python", "img" : "https://img-a.udemycdn.com/course/240x135/713104_d4cb.jpg", "author" : "Lazy Programmer Inc.", "quality" : "4.6", "member_ratting" : "1,843", "fee" : "$1190.99" },
    { "_id" : { "$oid" : "5f05ea25213cc85baa3edd2f" }, "title" : "Deep Learning: GANs and Variational Autoencoders", "img" : "https://img-a.udemycdn.com/course/240x135/918390_02a6.jpg", "author" : "Lazy Programmer Inc.", "quality" : "4.5", "member_ratting" : "1,771", "fee" : "$179.99" },
    { "_id" : { "$oid" : "5f05ea25213cc85baa3edd30" }, "title" : "Deep Learning Prerequisites: The Numpy Stack in Python (V2+)", "img" : "https://img-a.udemycdn.com/course/240x135/1754098_e0df_3.jpg", "author" : "Lazy Programmer Inc.", "quality" : "4.5", "member_ratting" : "18,064", "fee" : "$1000.99" },
    { "_id" : { "$oid" : "5f05ea26213cc85baa3edd31" }, "title" : "Data Science: Deep Learning in Python", "img" : "https://img-a.udemycdn.com/course/240x135/980086_196d_2.jpg", "author" : "Lazy Programmer Inc.", "quality" : "4.5", "member_ratting" : "6,565", "fee" : "$1000.99" },
    { "_id" : { "$oid" : "5f05ea26213cc85baa3edd32" }, "title" : "Natural Language Processing with Deep Learning in Python", "img" : "https://img-a.udemycdn.com/course/240x135/556954_8e95_2.jpg", "author" : "Lazy Programmer Inc.", "quality" : "4.5", "member_ratting" : "5,540", "fee" : "$1020.99" },
    { "_id" : { "$oid" : "5f05ea26213cc85baa3edd33" }, "title" : "The Data Science Course 2020: Complete Data Science Bootcamp", "img" : "https://img-a.udemycdn.com/course/240x135/887814_cf2e_2.jpg", "author" : "365 Careers, 365 Careers Team", "quality" : "4.5", "member_ratting" : "68,687", "fee" : "$1020.99" }
]

var dataCourseNew = [
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd50" }, "title" : "Learn Python Programming Masterclass", "img" : "https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg", "author" : "Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's Learn Programming Academy", "quality" : "4.5", "member_ratting" : "49,650", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd51" }, "title" : "The Python Mega Course: Build 10 Real World Applications", "img" : "https://img-a.udemycdn.com/course/240x135/692188_9da7_13.jpg", "author" : "Ardit Sulce", "quality" : "4.5", "member_ratting" : "39,585", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd52" }, "title" : "The Python Bible™ | Everything You Need to Program in Python", "img" : "https://img-a.udemycdn.com/course/240x135/903378_f32d_5.jpg", "author" : "Ziyad Yehia, Internet of Things Academy", "quality" : "4.6", "member_ratting" : "27,154", "fee" : "$12.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd53" }, "title" : "Complete Python Web Course: Build 8 Python Web Apps", "img" : "https://img-a.udemycdn.com/course/240x135/836376_8b97_4.jpg", "author" : "Jose Salvatierra, Teclado by Jose Salvatierra", "quality" : "4.4", "member_ratting" : "4,041", "fee" : "$109.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd54" }, "title" : "The Complete Python & PostgreSQL Developer Course", "img" : "https://img-a.udemycdn.com/course/240x135/666914_6c60_3.jpg", "author" : "Rob Percival, Jose Salvatierra, Codestars by Rob Percival, Teclado by Jose Salvatierra", "quality" : "4.5", "member_ratting" : "4,313", "fee" : "$119.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd55" }, "title" : "REST APIs with Flask and Python", "img" : "https://img-a.udemycdn.com/course/240x135/1035472_23ce_5.jpg", "author" : "Jose Salvatierra, Teclado by Jose Salvatierra", "quality" : "4.6", "member_ratting" : "10,160", "fee" : "$109.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd56" }, "title" : "Python for Absolute Beginners", "img" : "https://img-a.udemycdn.com/course/240x135/1035472_23ce_5.jpg", "author" : "Green Chameleon Learning", "quality" : "4.4", "member_ratting" : "16,531", "fee" : "$12.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd57" }, "title" : "Python for Beginners: Learn Python Programming (Python 3)", "img" : "https://img-a.udemycdn.com/course/240x135/1212032_b7e8.jpg", "author" : "Jason Cannon", "quality" : "4.4", "member_ratting" : "8,281", "fee" : "$11.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd58" }, "title" : "Python for Finance: Investment Fundamentals & Data Analytics", "img" : "https://img-a.udemycdn.com/course/240x135/932344_e14a_2.jpg", "author" : "365 Careers", "quality" : "4.5", "member_ratting" : "16,016", "fee" : "$15.99" },
    { "_id" : { "$oid" : "5f05f071213cc85baa3edd59" }, "title" : "Python for Finance: Investment Fundamentals & Data Analytics", "img" : "https://img-a.udemycdn.com/course/240x135/980086_196d_2.jpg", "author" : "365 Careers", "quality" : "4.5", "member_ratting" : "16,016", "fee" : "$15.99" }
]

var dataProgramBQ = [
    { "_id" : { "$oid" : "5f05f2aa213cc85baa3edd60" }, "title" : "Learning Python for Data Analysis and Visualization", "img" : "https://img-a.udemycdn.com/course/240x135/396876_cc92_7.jpg", "author" : "Jose Portilla", "quality" : "4.3", "member_ratting" : "14,380", "fee" : "$2110.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd61" }, "title" : "Data Analysis with Pandas and Python", "img" : "https://img-a.udemycdn.com/course/240x135/932344_e14a_2.jpg", "author" : "Boris Paskhaver", "quality" : "4.6", "member_ratting" : "10,051", "fee" : "$1310.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd62" }, "title" : "Microsoft Excel - Data Analysis with Excel Pivot Tables", "img" : "https://img-a.udemycdn.com/course/240x135/977438_476d_9.jpg", "author" : "Maven Analytics, Chris Dutton", "quality" : "4.6", "member_ratting" : "18,542", "fee" : "$3310.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd63" }, "title" : "SQL for Data Analysis: Weekender Crash Course for Beginners", "img" : "https://img-a.udemycdn.com/course/240x135/203556_5ff1_3.jpg", "author" : "A Course You'll Actually Finish, David Kim, Peter Sefton", "quality" : "4.3", "member_ratting" : "11,047", "fee" : "$1111.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd64" }, "title" : "Statistics for Data Science and Business Analysis", "img" : "https://img-a.udemycdn.com/course/240x135/1298780_731f_4.jpg", "author" : "365 Careers, 365 Careers Team", "quality" : "4.5", "member_ratting" : "15,647", "fee" : "$1110.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd65" }, "title" : "Data Analysis Essentials Using Excel", "img" : "https://img-a.udemycdn.com/course/240x135/1242944_5bcc_11.jpg", "author" : "Symon He, Travis Chow", "quality" : "4.5", "member_ratting" : "4,567", "fee" : "$1222.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd66" }, "title" : "Data Analysis with Pandas and Python", "img" : "https://img-a.udemycdn.com/course/240x135/932344_e14a_2.jpg", "author" : "Boris Paskhaver", "quality" : "4.6", "member_ratting" : "10,051", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd67" }, "title" : "Data Analysis Essentials Using Excel", "img" : "https://img-a.udemycdn.com/course/240x135/1242944_5bcc_11.jpg", "author" : "Symon He, Travis Chow", "quality" : "4.5", "member_ratting" : "4,567", "fee" : "$1222.99" },
    { "_id" : { "$oid" : "5f05f2ab213cc85baa3edd68" }, "title" : "Microsoft Excel - Data Analysis with Excel Pivot Tables", "img" : "https://img-a.udemycdn.com/course/240x135/977438_476d_9.jpg", "author" : "Maven Analytics, Chris Dutton", "quality" : "4.6", "member_ratting" : "18,542", "fee" : "$1000.99" },
    { "_id" : { "$oid" : "5f05f2ac213cc85baa3edd69" }, "title" : "R Programming A-Z™: R For Data Science With Real Exercises!", "img" : "https://img-a.udemycdn.com/course/240x135/765242_2578.jpg", "author" : "Kirill Eremenko, SuperDataScience Team", "quality" : "4.6", "member_ratting" : "33,172", "fee" : "$1000.99" }
]

var dataCourseQB = [
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd71" }, "title" : "Data Engineering, Serverless ETL & BI on Amazon Cloud", "img" : "https://img-a.udemycdn.com/course/240x135/3115248_29a4_3.jpg", "author" : "Siddharth Raghunath", "quality" : "4.0", "member_ratting" : "11", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd72" }, "title" : "Data Engineering on Google Cloud platform", "img" : "https://img-a.udemycdn.com/course/240x135/2235384_1408_3.jpg", "author" : "Siddharth Raghunath", "quality" : "4.3", "member_ratting" : "57", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd73" }, "title" : "Fast track - Learn Azure Data Engineering with Mini Project", "img" : "https://img-a.udemycdn.com/course/240x135/2686800_dab4_5.jpg", "author" : "Karthik J", "quality" : "4.1", "member_ratting" : "42", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd74" }, "title" : "Data Science 101", "img" : "https://img-a.udemycdn.com/course/240x135/1999510_3b3d_2.jpg", "author" : "Nolita Analytics", "quality" : "3.7", "member_ratting" : "27", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd75" }, "title" : "Feature Engineering for Machine Learning", "img" : "https://img-a.udemycdn.com/course/240x135/1304050_ee0f_8.jpg", "author" : "Soledad Galli", "quality" : "4.6", "member_ratting" : "1,342", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd76" }, "title" : "SQL, NoSQL, Big Data and Hadoop", "img" : "https://img-a.udemycdn.com/course/240x135/1734696_c0b1_3.jpg", "author" : "Michael Enudi", "quality" : "4.4", "member_ratting" : "74", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd77" }, "title" : "Complete Linear Algebra for Data Science & Machine Learning", "img" : "https://img-a.udemycdn.com/course/240x135/1568464_c455_5.jpg", "author" : "Kashif Altaf", "quality" : "4.6", "member_ratting" : "386", "fee" : "$11.99" },
    { "_id" : { "$oid" : "5f05f3d6213cc85baa3edd78" }, "title" : "Complete Machine Learning and Data Science: Zero to Mastery", "img" : "https://img-a.udemycdn.com/course/240x135/2511476_4e38_3.jpg", "author" : "Andrei Neagoie, Daniel Bourke", "quality" : "4.6", "member_ratting" : "3,875", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d7213cc85baa3edd79" }, "title" : "The Data Science Course 2020: Complete Data Science Bootcamp", "img" : "https://img-a.udemycdn.com/course/240x135/1754098_e0df_3.jpg", "author" : "365 Careers, 365 Careers Team", "quality" : "4.5", "member_ratting" : "68,687", "fee" : "$10.99" },
    { "_id" : { "$oid" : "5f05f3d7213cc85baa3edd7a" }, "title" : "Python for Data Science and Machine Learning Bootcamp", "img" : "https://img-a.udemycdn.com/course/240x135/903744_8eb2.jpg", "author" : "Jose Portilla", "quality" : "4.6", "member_ratting" : "80,801", "fee" : "$10.99" }
]

var reviewer = [
    {"name": "Nguyễn Tấn Lợi", "img": "../img/admin.jpg", "work": "Data Enginner", "location": "VietNam", "review": '"I started at stage zero. With Coursera I was able to start learning online and eventually build up enough knowledge and skills"'},
    {"name": "Trần Tấn Thành", "img": "../img/admin2.jpg", "work": "Data Scientis", "location": "USA", "review": '"It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable . This program is totally disrupting higher education."'},
    {"name": "Huỳnh Ngọc Nhân", "img": "../img/nhan.jpg", "work": "Data Analytis", "location": "Japan", "review": '"Recruiters saw my Professional Certificate  on my LinkedIn profile. During the interview, they told me they were impressed with the skills I learned. I got the job!"'},
    {"name": "Ngô Phúc Duy", "img": "../img/duy.jpg", "work": "Security", "location": "Paris", "review": '"We were looking for scale, credibility, and something we didn’t have to build in-house. Coursera not only offers  but also a platform that allows you to do the tracking that you want."'}
]

var featureReview = [
    {"name": "Raúl Maynar Selgas", "img": "../img/feature-review1.jpg", "time": "a year ago", "review": "Explicaciones claras y concisas. No se hace aburrido, aunque algunas partes como la de instalar el servicio en un servidor propio la hubiera obviado. Interesante la parte de instalación en Heroku aunque tuve que realizarlo con gunicorn en vez de uwsgi porque este último no conseguía arrancar en el \'dyno\' de Heroku. Lo bueno de estos cursos con tantos alumnos es que otros estudiantes dejan comentarios donde luego se aclaran dudas"},
    {"name": "Roxanne Reindl", "img": "../img/feature-review2.jpg", "time": "5 months ago", "review": "Yes! I\'ve taken a Java college course before and I didnt really understand very much as that was my first programming course. So I was looking into trying to learn to code again and I loved how it the course has started off slow with helping me understand the basics first. Also, I love that I can follow along with the videos. So far I have understood all the topics."},
    {"name": "Lillian Sk", "img": "../img/feature-review3.jpg", "time": "a year ago", "review": "Great course with real-world examples. I would recommend to those who are starting to learn Python, as well as to those who want to do more complex programs. Most things explained very clearly. Plenty of opportunities for learning additional materials, like how to troubleshoot errors, how to install python libraries, use SQL or HTML with Python. Many thanks to the tutor."},
    {"name": "Terry M", "img": "../img/feature-review4.jpg", "time": "a year ago", "review": "Brilliant course, I am new to python and this course opens your eyes to what Python is capable of. The real world examples are brilliant, thank you very much for putting this course together! Looking forward to your next one"},
    {"name": "Ximena ft", "img": "../img/feature-review5.jpg", "time": "2 months ago", "review": "It\'s a bit introductory, for those of us who already have experience it is a bit redundant to repeat this, however, the instructor gives a very concise and clear explanation of broad programming concepts. this is a fantastic introductory course to anyone just starting to dip their toes into programming."},
    {"name": "Robert Lansing", "img": "../img/feature-review6.jpg", "time": "a year ago", "review": "So far, yes, it has been a good selection. Moving faster than perhaps I would like. Addressing all the different OS and providing different examples is kind of overwhelming for me. But, it is very good information since I now know I have to learn the different features of other OS."}
]