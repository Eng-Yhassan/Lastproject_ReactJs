import imag1 from "../images/tech.jpg"
import imag2 from "../images/Leadership.jpg"
import imag3 from "../images/Charity-Gala.jpg"
import imag4 from "../images/Digital.webp"
import imag5 from "../images/Corporate.jpg"
import imag6 from "../images/financial.jpg"
import imag7 from "../images/ai-somalia.jpg"
import imag8 from "../images/public-speak.jpg"
import imag9 from "../images/wedding.jpg"
import imag10 from "../images/innovation.jpg"
import imag11 from "../images/musical festival.jpg"
import imag12 from "../images/data analysis.jpg"

const Database= [
    {
        id:1,
        image: imag1,
        name: "Tech Innovation Summit 2025",
        title: "Join industry leaders for groundbreaking discussion on emerging technologies and...",
        category: "Events",
        date: "March 15, 2025",
        location: "Wadajir-Hotel-Jaziira",
        time: "03:00pm",
        description: `Join us for a powerful workshop with Abdimaalik Abdirahmaan – Tech Lead at Oslo Municipality, Founder & CEO of Digna AS, and Chair of the Somali Norwegian Chamber of Commerce. 
He will uncover strategies on how to attract global opportunities without actively applying. 
With over a decade of leadership in digital transformation, Abdimaalik shares his proven methods. 
You will learn to optimize your LinkedIn profile for maximum reach. 
Understand how recruiters discover hidden talent and how to become visible. 
Discover ways to showcase your achievements through storytelling. 
Gain strategies to build meaningful professional connections. 
Learn how to turn social media presence into a professional advantage. 
Explore techniques to stay relevant in an ever-changing job market. 
This event is your chance to unlock the doors of limitless career growth.`
    },
    {
        id:2,
        image: imag2,
        name: "Leadership Excellence Seminar",
        title: "Develop essential leadership Skills with expert facilitators and interactive workshop.",
        category: "Seminar",
        date: "February 15, 2025",
        location: "Garowe-Putland",
        time: "04:00pm",
        description: `Leadership is the foundation of success in every industry. 
This seminar is designed to help you master essential skills in decision-making and team management. 
Participants will engage in interactive group sessions with experts. 
Learn how to communicate with impact and inspire your team. 
Gain knowledge of modern leadership styles in a changing world. 
Understand conflict resolution and building trust. 
Discover the role of emotional intelligence in leading people. 
Explore practical case studies from business leaders. 
Build confidence in your ability to take charge of challenges. 
By the end, you will leave empowered to lead with vision and confidence.`
    },
    {
        id:3,
        image: imag3,
        name: "Annual Charity Gala",
        title: "An elegant evening supporting local communities with entertainment, dining, and....",
        category: "Events",
        date: "July 20, 2025",
        location: "Hodan-Ex-digfeer-hospital",
        time: "18:00pm",
        description: `The Annual Charity Gala is a night of elegance and generosity. 
Guests will enjoy live performances, inspiring speeches, and fine dining. 
All proceeds will directly support local community development projects. 
Network with philanthropists, business leaders, and community heroes. 
Witness moving stories of lives being changed through charity. 
Experience an evening that blends luxury with compassion. 
Celebrate the achievements of organizations making a difference. 
Be inspired by the power of collective giving and support. 
Enjoy unforgettable memories with friends and colleagues. 
This gala is not just an event, it is a movement for social good.`
    },
    {
        id:4,
        image: imag4,
        name: "Digital Marketing Workshop",
        title: "Master the latest digital marketing strategies and tools for business growth.",
        category: "Seminar",
        date: "June 15, 2025",
        location: "km4",
        time: "06:00pm",
        description: `The Digital Marketing Workshop will take you from basics to advanced strategies. 
Learn how to build powerful campaigns that drive results. 
Discover the secrets of SEO, paid ads, and social media growth. 
Hands-on exercises will help you implement real strategies instantly. 
Understand customer behavior through analytics and insights. 
Gain tips on building content that converts followers into buyers. 
Explore the latest AI tools shaping marketing today. 
Network with professionals and share innovative ideas. 
Walk away with a digital plan tailored for your business. 
By attending, you will be fully equipped to grow your brand online.`
    },
    {
        id:5,
        image: imag5,
        name: "Corporate Team Building Retreat",
        title: "Strengthen team bonds with outdoor activities and professional development...",
        category: "Events",
        date: "April 23, 2025",
        location: "Howl-Wadaag",
        time: "19:00pm",
        description: `This retreat is designed to strengthen team spirit and collaboration. 
Participants will engage in outdoor adventure challenges. 
Workshops will focus on problem-solving and creativity. 
Teams will learn effective communication and trust-building. 
Fun games are blended with leadership development exercises. 
Enjoy a balance of relaxation, networking, and growth. 
Get inspired by motivational sessions from experts. 
Experience activities that boost innovation and resilience. 
Strengthen workplace relationships in an informal setting. 
At the end, your team will return united and motivated.`
    },
    {
        id:6,
        image: imag6,
        name: "Financial Planning Seminar",
        title: "Learn investment strategies and financial planning from certified advisors.",
        category: "Seminar",
        date: "October 03, 2025",
        location: "Wasaarada-Maaliyada",
        time: "08:00Am",
        description: `This seminar will give you the keys to financial freedom. 
Learn how to budget wisely and manage resources effectively. 
Understand different types of investments and their risks. 
Gain insider tips from certified financial advisors. 
Plan your retirement and secure your family’s future. 
Discover strategies to reduce debt and increase savings. 
Understand how to build long-term wealth. 
Get introduced to digital finance and modern tools. 
Avoid common mistakes that keep people financially trapped. 
With the right knowledge, financial success becomes possible.`
    },
    {
        id:7,
        image: imag7,
        name: "Product Launch Event",
        title: "Exclusive unveiling of innovative products with live demonstrations and networking...",
        category: "Events",
        date: "November 13, 2025",
        location: "Simad-Ilab",
        time: "03:00pm",
        description: `Be the first to witness groundbreaking product innovations. 
This launch event will showcase live demos of cutting-edge solutions. 
Network with industry experts and fellow innovators. 
Gain insights into the journey behind the product creation. 
Discover how these innovations will shape industries. 
Enjoy an exclusive experience of technology and creativity. 
Hear directly from developers and product managers. 
Explore opportunities for partnerships and collaboration. 
Celebrate a milestone in innovation with key stakeholders. 
Don’t miss your chance to be part of the future unveiling.`
    },
    {
        id:8,
        image: imag8,
        name: "Public Speaking Seminar",
        title: "Overcome stage fright and develop confident public speaking skills.",
        category: "Seminar",
        date: "December 7, 2025",
        location: "Java Coffee",
        time: "04:00pm",
        description: `Speaking in public is a skill that opens doors to opportunities. 
This seminar teaches you how to overcome stage fright. 
Learn breathing and voice control techniques to sound confident. 
Practice real-life presentation exercises with feedback. 
Discover how to structure powerful speeches. 
Gain confidence to speak in front of small and large audiences. 
Learn storytelling techniques to engage your listeners. 
Understand how body language impacts communication. 
Receive guidance from experienced public speakers. 
By the end, you will be ready to inspire with your words.`
    },
    {
        id:9,
        image: imag9,
        name: "Wedding Expo 2025",
        title: "Discover the latest wedding trends, vendors, and planning services.",
        category: "Events",
        date: "August 25, 2025",
        location: "Armaan Hall",
        time: "10:00Am",
        description: `The Wedding Expo is the ultimate destination for couples planning their big day. 
Meet top wedding planners and vendors under one roof. 
Discover stunning décor, dresses, and photography styles. 
Enjoy live fashion shows and sample delicious wedding menus. 
Get tips from experts on budgeting and organizing your event. 
Explore creative ideas for unique wedding experiences. 
Connect with designers and service providers directly. 
Gain inspiration from international wedding trends. 
Take advantage of exclusive discounts and offers. 
This expo will make your dream wedding a reality.`
    },
    {
        id:10,
        image: imag10,
        name:"Entrepreneurship Bootcamp",
        title: "Incentive program for aspiring entrepreneurs to launch their startups.",
        category: "Seminar",
        date: "March 1, 2025",
        location: "Innovation Center",
        time: "02:00pm",
        description: `This bootcamp empowers aspiring entrepreneurs with the right tools. 
Learn how to turn an idea into a profitable business. 
Discover techniques to validate your product in the market. 
Gain knowledge on pitching to investors with confidence. 
Build a scalable business model for long-term success. 
Network with mentors and like-minded entrepreneurs. 
Get access to resources that accelerate startup growth. 
Work on group projects and present your solutions. 
Receive mentorship from successful business founders. 
Walk away ready to launch your own startup journey.`
    },
    {
        id:11,
        image: imag11,
        name: "Music Festival 2025",
        title: "Three days of live music featuring local and international artists.",
        category: "Events",
        date: "May 04, 2025",
        location: "Rashka-Production",
        time: "05:00pm",
        description: `Experience three unforgettable days of live music and entertainment. 
Dance to performances from local and global artists. 
Discover new talent and enjoy diverse musical genres. 
Food stalls and cultural exhibitions will be available. 
Connect with fellow music lovers in an electric atmosphere. 
Each night closes with spectacular live shows. 
Enjoy workshops with professional musicians. 
Explore cultural art displays alongside the music. 
Celebrate diversity and creativity in one festival. 
This festival promises memories that last a lifetime.`
    },
    {
        id:12,
        image: imag12,
        name: "Data Science Workshop",
        title: "Hands-on training in data analysis, machine learning, and visualization.",
        category: "Seminar",
        date: "January 25, 2025",
        location: "University Campus",
        time: "09:00Am",
        description: `The Data Science Workshop is designed for future innovators. 
Learn the foundations of data collection and cleaning. 
Apply machine learning algorithms to real-world datasets. 
Master visualization techniques to communicate insights. 
Work on practical projects guided by industry experts. 
Gain exposure to tools like Python, R, and Tableau. 
Discover the role of AI in business and research. 
Collaborate with peers in group coding sessions. 
Prepare for careers in data-driven industries. 
Leave equipped with skills for the future of technology.`
    },
]



export default Database
