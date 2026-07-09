// src/data/myproject/tcaschatbot.js

export const projectDataTH = {
  title: "TCAS ChatBot",
  subtitle: "AI Chatbot ตอบคำถาม TCAS จากข้อมูล ทปอ. TCAS69",
  description: "TCAS ChatBot เป็น Web Application ที่ใช้ AI ในการตอบคำถามเกี่ยวกับระบบ TCAS (Thai University Central Admission System) โดยอ้างอิงข้อมูลโดยตรงจากคู่มือและประกาศของ ทปอ. TCAS69 ระบบมีฟีเจอร์ค้นหาคณะใกล้เคียง (Semantic Search) การแสดงสถิติการศึกษา และ Token-based Rate Limiting เพื่อให้บริการแก่นักเรียนทั่วประเทศ พัฒนาด้วย Next.js และ Google Gemini AI",
  tags: ["Next.js", "Google Gemini AI", "RAG", "TypeScript", "Semantic Search", "Production"],

  liveUrl: "https://chatbot.lks.ac.th",
  githubUrl: "https://github.com/hooom1234/TcasChatBot",

  gallery: [
    {
      src: "https://res.cloudinary.com/dg0uswwo4/image/upload/f_auto/v1752069000/tcas-chatbot-main_zyxwvu.png",
      alt: "TCAS ChatBot หน้าหลัก - Chat Interface",
      caption: "หน้าหลัก - แชทถาม-ตอบ TCAS ด้วย Google Gemini AI"
    },
    {
      src: "https://res.cloudinary.com/dg0uswwo4/image/upload/f_auto/v1752069001/tcas-chatbot-similar_abcdef.png",
      alt: "TCAS ChatBot ฟีเจอร์คณะใกล้เคียง",
      caption: "ฟีเจอร์วิเคราะห์คะแนนและค้นหาคณะที่เหมาะสม (TCAS68 Data Analysis)"
    },
  ],
  
  sections: [
    {
      id: "intro",
      title: "ที่มาและความสำคัญ",
      content: "ระบบ TCAS มีรายละเอียดซับซ้อนและเปลี่ยนแปลงทุกปี ทำให้นักเรียนหลายคนสับสนในเรื่องรอบการสมัคร เกณฑ์คะแนน และขั้นตอนต่าง ๆ โปรเจกต์นี้จึงถูกพัฒนาขึ้นเพื่อเป็น AI Assistant ที่สามารถตอบคำถามจากข้อมูลอ้างอิงที่เชื่อถือได้ โดยใช้เทคนิค RAG (Retrieval-Augmented Generation) เพื่อให้คำตอบมีความถูกต้องและอ้างอิงได้",
    },
    {
      id: "architecture",
      title: "สถาปัตยกรรมระบบ (System Architecture)",
      content: "ระบบพัฒนาด้วย Next.js 15 (App Router) และ TypeScript โดยใช้ Google Gemini AI เป็น LLM หลักสำหรับการ Generate คำตอบ ข้อมูล TCAS69 ถูก Embed เป็น Vector ด้วย Text Embedding และจัดเก็บเพื่อทำ Semantic Search ระบบมี Token-based Rate Limiting เพื่อป้องกัน Abuse และ Deploy บน Production Server ที่ chatbot.lks.ac.th",
    },
    {
      id: "features",
      title: "ฟีเจอร์หลัก (Key Features)",
      list: [
        "AI Chat: ตอบคำถาม TCAS ด้วย Google Gemini AI แบบ Real-time",
        "RAG System: อ้างอิงข้อมูลจากคู่มือ TCAS69 ของ ทปอ. เพื่อความถูกต้อง",
        "คณะใกล้เคียง: ค้นหาคณะที่มีความใกล้เคียง/คล้ายกันด้วย Semantic Search",
        "สถิติการศึกษา: แสดงข้อมูลสถิติและแนวโน้มการสมัคร TCAS",
        "Token Rate Limiting: จำกัดการใช้งาน 20 Tokens/Session เพื่อความยั่งยืน",
        "Responsive Design: รองรับทุกขนาดหน้าจอ ทั้ง Mobile และ Desktop"
      ]
    }
  ],

  codeSnippets: {
    ragSystem: `// RAG Pipeline: ค้นหาข้อมูล TCAS ที่เกี่ยวข้องก่อน Generate คำตอบ
async function generateChatResponse(userMessage: string) {
  // 1. Embed คำถามของผู้ใช้เป็น Vector
  const queryEmbedding = await embedText(userMessage);
  
  // 2. Semantic Search หาข้อมูล TCAS ที่ใกล้เคียงที่สุด
  const relevantChunks = await searchSimilarChunks(queryEmbedding, {
    topK: 5,
    threshold: 0.7,
  });
  
  // 3. สร้าง Context จากข้อมูลที่ค้นพบ
  const context = relevantChunks
    .map((chunk) => chunk.content)
    .join("\\n\\n---\\n\\n");
  
  // 4. ส่งให้ Gemini AI สร้างคำตอบโดยใช้ Context
  const response = await gemini.generateContent({
    contents: [{
      role: "user",
      parts: [{ text: buildPrompt(context, userMessage) }],
    }],
  });
  
  return response.text();
}`,

    tokenRateLimit: `// Token Rate Limiting: จำกัด 20 tokens ต่อ session
export async function checkAndDeductToken(
  sessionId: string
): Promise<{ allowed: boolean; remaining: number }> {
  const key = \`tokens:\${sessionId}\`;
  const MAX_TOKENS = 20;
  
  const current = await redis.get(key);
  const used = current ? parseInt(current) : 0;
  
  if (used >= MAX_TOKENS) {
    return { allowed: false, remaining: 0 };
  }
  
  await redis.incr(key);
  await redis.expire(key, 86400); // Reset ทุก 24 ชั่วโมง
  
  return {
    allowed: true,
    remaining: MAX_TOKENS - used - 1,
  };
}`,

    semanticSearch: `// Semantic Search: ค้นหาคณะใกล้เคียงด้วย Cosine Similarity
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

export async function findSimilarFaculties(
  targetFaculty: Faculty
): Promise<SimilarFaculty[]> {
  // Embed ชื่อและรายละเอียดคณะเป้าหมาย
  const targetEmbedding = await embedText(
    \`\${targetFaculty.name} \${targetFaculty.description}\`
  );
  
  // คำนวณ Similarity กับทุกคณะในฐานข้อมูล
  const similarities = allFaculties.map((faculty) => ({
    faculty,
    score: cosineSimilarity(targetEmbedding, faculty.embedding),
  }));
  
  // เรียงลำดับและส่งคืน Top 10
  return similarities
    .sort((a, b) => b.score - a.score)
    .slice(1, 11); // ข้ามตัวเอง
}`
  }
};

export const projectDataEN = {
  title: "TCAS ChatBot",
  subtitle: "AI-Powered Chatbot for Thai University Admission (TCAS) Queries",
  description: "TCAS ChatBot is a Web Application powered by AI to answer questions about the Thai University Central Admission System (TCAS), referencing official data from the TCAS69 handbook published by CUPT. It features a Semantic Search for similar faculties, educational statistics, and Token-based Rate Limiting. Built with Next.js and Google Gemini AI, and currently live in production.",
  tags: ["Next.js", "Google Gemini AI", "RAG", "TypeScript", "Semantic Search", "Production"],

  liveUrl: "https://chatbot.lks.ac.th",
  githubUrl: "https://github.com/hooom1234/TcasChatBot",

  gallery: projectDataTH.gallery,
  
  sections: [
    {
      id: "intro",
      title: "Background & Importance",
      content: "The TCAS admission system is complex and changes every year, leaving many students confused about application rounds, score requirements, and procedures. This project was developed as an AI Assistant capable of answering questions from reliable, official reference data. It uses the RAG (Retrieval-Augmented Generation) technique to ensure answers are accurate and traceable.",
    },
    {
      id: "architecture",
      title: "System Architecture",
      content: "Built with Next.js 15 (App Router) and TypeScript, using Google Gemini AI as the primary LLM for response generation. TCAS69 data is embedded as vectors using Text Embedding and stored for Semantic Search. The system includes Token-based Rate Limiting to prevent abuse and is deployed on a production server at chatbot.lks.ac.th.",
    },
    {
      id: "features",
      title: "Key Features",
      list: [
        "AI Chat: Real-time TCAS Q&A powered by Google Gemini AI",
        "RAG System: Grounds answers in official TCAS69 data from CUPT for accuracy",
        "Similar Faculties: Find related university programs using Semantic Search",
        "Education Statistics: Displays TCAS application data and trends",
        "Token Rate Limiting: 20 Tokens/Session limit for sustainable service",
        "Responsive Design: Fully optimized for both Mobile and Desktop screens"
      ]
    }
  ],

  codeSnippets: projectDataTH.codeSnippets
};

export const projectData = projectDataEN;
