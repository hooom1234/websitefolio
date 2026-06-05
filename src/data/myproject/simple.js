// src/data/myproject/simple.js

export const projectDataTH = {
  title: "Simple Time Life Planner",
  subtitle: "เว็บสร้างตารางจัดเวลาชีวิตอย่างง่าย",
  description: "Web Application สำหรับช่วยจัดตารางเวลาในชีวิตประจำวัน เพื่อให้ผู้ใช้งานมองเห็นแผนงานของตนเองในแต่ละวันได้อย่างเป็นระบบ พัฒนาโดยเน้นความเรียบง่ายและใช้งานได้ทันที (Interactive) รองรับการแสดงผลทุกหน้าจอ (Responsive) และระบบบันทึกข้อมูลอัตโนมัติ",
  tags: ["Vue.js", "HTML5", "CSS3", "LocalStorage", "Responsive Design"],

  gallery: [
    {
      src: "https://res.cloudinary.com/dg0uswwo4/image/upload/f_auto/v1765026510/test_xqlypl.png",
      alt: "Simple Time Life Planner Interface",
      caption: "Overview of Simple Time Life Planner"
    }
  ],
  
  sections: [
    {
      id: "intro",
      title: "ที่มาและความสำคัญ",
      content: "โปรเจกต์นี้เริ่มต้นจากความต้องการเครื่องมือจัดตารางชีวิตที่เรียบง่าย ไม่ซับซ้อน เพื่อช่วยให้การวางแผนรายวันมีประสิทธิภาพมากขึ้น โดยออกแบบให้ผู้ใช้สามารถกำหนดช่วงเวลา (Time Sections) ได้เองตามไลฟ์สไตล์ที่แตกต่างกัน",
    },
    {
      id: "architecture",
      title: "เทคโนโลยีเบื้องหลัง (Technology Stack)",
      content: "พัฒนาด้วย Vue.js (CDN) เพื่อการประมวลผลฝั่ง Client-side ที่รวดเร็ว โดยไม่มีการใช้ Database ฝั่ง Server แต่เลือกใช้ 'LocalStorage' ของ Browser ในการบันทึกข้อมูลตารางเวลา ทำให้ข้อมูลยังคงอยู่แม้จะปิดหน้าเว็บไปแล้ว และมีความเป็นส่วนตัวสูง",
    },
    {
      id: "features",
      title: "ฟีเจอร์หลัก (Key Features)",
      list: [
        "Interactive UI: ตอบสนองผู้ใช้ทันทีด้วย Vue.js Data Binding",
        "Customizable Sections: แบ่งช่วงเวลาได้ยืดหยุ่น (2, 4, 6, 8, 12, 24 ส่วน)",
        "Auto Save: บันทึกข้อมูลอัตโนมัติด้วย LocalStorage",
        "Real-time Clock: แสดงเวลาปัจจุบันแบบ Real-time",
        "Responsive Design: รองรับการใช้งานทั้งบนคอมพิวเตอร์และมือถือ"
      ]
    }
  ],

  codeSnippets: {
    source: `<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Time Life Planner</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.global.prod.min.js"></script>
    <style>
        /* CSS Styles ... */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #eaecf7 0%, #51ffcb 100%);
            min-height: 100vh; padding: 20px;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="container">
            <div class="header">
                <h1>Simple Time Life Planner</h1>
                <p>จัดตารางชีวิตประจำวันแบบง่ายๆ</p>
            </div>
            
            <div class="current-time-info">
                เวลาปัจจุบัน: {{ currentTimeString }}
            </div>
    </div>

    <script>
        const { createApp } = Vue;
        createApp({
            data() {
                return {
                    currentTime: new Date(),
                    selectedSections: 8,
                    sections: [],
                    schedule: {},
                    days: []
                }
            },
            mounted() {
                setInterval(this.updateCurrentTime, 1000);
            }
        }).mount('#app');
    </script>
</body>
</html>`
  }
};

export const projectDataEN = {
  title: "Simple Time Life Planner",
  subtitle: "Simple Web-based Daily Time Planner",
  description: "A daily schedule planner Web Application designed to help users visualize and structure their day. Developed with a focus on ease-of-use and interactivity, featuring responsive layouts and auto-save capabilities.",
  tags: ["Vue.js", "HTML5", "CSS3", "LocalStorage", "Responsive Design"],

  gallery: projectDataTH.gallery,
  
  sections: [
    {
      id: "intro",
      title: "Background & Significance",
      content: "This project originated from the need for a simple, minimal schedule planner to increase daily planning productivity. It is designed to let users custom-define time slots (Time Sections) that fit their personal lifestyle.",
    },
    {
      id: "architecture",
      title: "Technology Stack",
      content: "Built using Vue.js (via CDN) for fast client-side rendering. To ensure maximum privacy and instant availability, it utilizes the browser's 'LocalStorage' instead of a backend database, keeping your data safe and stored locally even after closing the browser.",
    },
    {
      id: "features",
      title: "Key Features",
      list: [
        "Interactive UI: Highly responsive user interface driven by Vue.js data binding",
        "Customizable Sections: Flexible schedule segmentation (2, 4, 6, 8, 12, or 24 sections)",
        "Auto Save: LocalStorage integration automatically saves progress",
        "Real-time Clock: Displays current time dynamically",
        "Responsive Design: Fully optimized for both desktop and mobile screens"
      ]
    }
  ],

  codeSnippets: projectDataTH.codeSnippets
};

export const projectData = projectDataEN;