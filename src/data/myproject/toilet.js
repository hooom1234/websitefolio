// src/data/myproject/toilet.js

export const projectDataTH = {
  title: "Smart Toilet System",
  subtitle: "ห้องน้ำอัจฉริยะแบบไร้การสัมผัสด้วย AI",
  description: "นวัตกรรมห้องน้ำสาธารณะต้นแบบที่นำเทคโนโลยีเซนเซอร์และปัญญาประดิษฐ์ (AI) มาประยุกต์ใช้เพื่อลดการสัมผัส (Touchless) ป้องกันการแพร่ระบาดของเชื้อโรค โดยผู้ใช้งานสามารถสั่งการเปิด-ปิดประตู, กดชักโครก และเปิดถังขยะได้ผ่านสัญลักษณ์มือ (Hand Gesture) พร้อมระบบแจ้งสถานะการเข้าใช้งานอัตโนมัติ",
  tags: ["Arduino", "AI Hand Tracking", "IoT", "PictoBlox", "Smart Automation"],

  gallery: [
    {
      src: "https://res.cloudinary.com/dg0uswwo4/image/upload/f_auto/v1765027283/420637537_2106476606417749_4370207783311886012_n_bbobw6.jpg",
      alt: "",
      caption: "overview of Smart Toilet System (Front)" 
    },
    {
      src: "https://res.cloudinary.com/dg0uswwo4/image/upload/f_auto/v1765027268/420493927_789528639672504_7647500225034578779_n_dvpf3r.jpg",
      alt: "Hand Gesture Recognition",
      caption: "overview of Smart Toilet System (Above)" 
    },
  ],
  
  sections: [
    {
      id: "intro",
      title: "ที่มาและความสำคัญ",
      content: "ในยุคปัจจุบันที่มีการแพร่ระบาดของเชื้อไวรัส (เช่น COVID-19) ห้องน้ำสาธารณะถือเป็นจุดเสี่ยงสำคัญ โครงงานนี้จึงเกิดขึ้นเพื่อแก้ปัญหาความสะอาดและการสัมผัสพื้นผิวร่วม โดยการสร้างระบบอัตโนมัติที่อำนวยความสะดวกให้แก่ผู้ใช้งาน รวมถึงผู้สูงอายุและผู้พิการ ให้สามารถใช้งานห้องน้ำได้โดยไม่ต้องสัมผัสอุปกรณ์",
    },
    {
      id: "architecture",
      title: "การทำงานของระบบ (System Architecture)",
      content: "ระบบควบคุมด้วยบอร์ด Arduino UNO ทำงานร่วมกับโปรแกรม PictoBlox และ AI Hand Pose Classifier โดยใช้ Ultrasonic Sensor ตรวจจับคนเข้า-ออก และใช้กล้องจับภาพสัญลักษณ์มือเพื่อสั่งการ Servo Motor ในการควบคุมกลไกต่างๆ ภายในห้องน้ำ",
    },
    {
      id: "features",
      title: "ฟีเจอร์หลัก (Key Features)",
      list: [
        "Touchless Entry: เปิด-ปิดประตูและไฟอัตโนมัติด้วย Ultrasonic Sensor",
        "AI Gesture Control: สั่งกดชักโครกและเปิดถังขยะด้วยสัญลักษณ์มือ",
        "Smart Status: แสดงสถานะห้องน้ำ (Welcome/Unavailable) ผ่านจอ LCD",
        "Auto Lighting: ระบบไฟ RGB อัตโนมัติเมื่อมีผู้ใช้งาน"
      ]
    }
  ],

  codeSnippets: {
    source: `// Smart Toilet System Logic (Arduino Concept)
#include <Servo.h>
#include <LiquidCrystal_I2C.h>

// Define Sensors & Actuators
#define TRIG_PIN 9
#define ECHO_PIN 10
#define DOOR_SERVO_PIN 3
#define FLUSH_SERVO_PIN 5
#define TRASH_SERVO_PIN 6

Servo doorServo;
Servo flushServo;
Servo trashServo;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  doorServo.attach(DOOR_SERVO_PIN);
  lcd.begin();
  lcd.print("Welcome");
}

void loop() {
  long duration, distance;
  // Ultrasonic Detection Logic
  digitalWrite(TRIG_PIN, LOW); delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  duration = pulseIn(ECHO_PIN, HIGH);
  distance = (duration / 2) / 29.1;

  // 1. Enter Bathroom Logic
  if (distance < 50) { // Person Detected
    lcd.clear();
    lcd.print("Unavailable");
    openDoor();
    turnOnLights();
    delay(5000); // Wait 5s
    closeDoor();
  }

  // 2. AI Gesture Logic (Receive Signal from PictoBlox)
  if (Serial.available() > 0) {
    char gesture = Serial.read();
    
    if (gesture == '1') { // 1 Finger Gesture
       flushToilet(); 
       openTrashCan();
    } 
    else if (gesture == '5') { // 5 Fingers Gesture
       openDoor(); // Exit
       turnOffLights();
       lcd.print("Welcome"); // Reset Status
    }
  }
}`
  }
};

export const projectDataEN = {
  title: "Smart Toilet System",
  subtitle: "Contactless Smart Toilet System powered by AI",
  description: "An innovative public toilet prototype utilizing sensor technology and artificial intelligence (AI) to enable completely touchless operations. Designed to prevent the spread of diseases, users can open/close doors, flush the toilet, and open the trash bin using Hand Gestures, complete with automatic occupancy status notifications.",
  tags: ["Arduino", "AI Hand Tracking", "IoT", "PictoBlox", "Smart Automation"],

  gallery: projectDataTH.gallery,
  
  sections: [
    {
      id: "intro",
      title: "Background & Significance",
      content: "In the modern era where virus transmission (e.g. COVID-19) is a significant concern, public restrooms present high risks of surface contamination. This project aims to address hygiene and touch-based transmission concerns by building an automated, contactless system to assist users—including the elderly and disabled—without direct contact.",
    },
    {
      id: "architecture",
      title: "System Architecture",
      content: "The system is controlled by an Arduino UNO board, working in tandem with the PictoBlox programming software and an AI Hand Pose Classifier. It utilizes ultrasonic sensors to detect entry/exit and camera-based hand gesture recognition to control servo motors that drive the mechanical units.",
    },
    {
      id: "features",
      title: "Key Features",
      list: [
        "Touchless Entry: Automatic door and lighting control via ultrasonic sensors",
        "AI Gesture Control: Hand gesture commands to flush the toilet and open the trash bin",
        "Smart Status: Visual occupancy notifications (Welcome/Unavailable) displayed on an LCD screen",
        "Auto Lighting: Automated RGB lighting system active upon user entry"
      ]
    }
  ],

  codeSnippets: projectDataTH.codeSnippets
};

export const projectData = projectDataEN;