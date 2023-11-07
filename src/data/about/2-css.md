---
title: CSS ที่ใช้งาน
slug: css
---

เนื่องจากอยากให้เริ่มต้นได้ง่ายและเบา จึงไม่ได้ใช้ CSS Framework แต่เตรียมค่าเริ่มต้นไว้ให้

หากต้องการนำไปใช้กับ Tailwind หรือ Framework อื่นๆ ก็สามารถทำได้

## CSS Variables

อยู่ที่ไฟล์ `/src/styles/_var.scss`

ส่วนใหญ่เป็นการตั้งค่าสี และฟอนต์ body กับ heading (ซึ่งตอนนี้ใช้ฟอนต์ Noto Sans Thai เหมือนกัน)

## CSS Helper Class

อยู่ที่ไฟล์ `/src/styles/_ini.scss`

จะตั้งชื่อขึ้นต้นด้วย \_ ตามแนวทางตั้งชื่อแบบ [RSCSS](https://ricostacruz.com/rscss/)

| CSS Class                 | Description                                       |
| ------------------------- | ------------------------------------------------- |
| `_h1`, `_h2`, ... , `_h5` | ปรับขนาดตัวอักษรให้เล็กใหญ่เหมือนขนาด h1, h2, ... |
| `_sr`                     | ไม่แสดงข้อความ ใช้สำหรับ Screen Reader เท่านั้น   |
| `_space`                  | เพิ่ม margin-bottom ตามขนาดอุปกรณ์ (16px - 30px)  |
| `_mobile`                 | แสดงผลเฉพาะบนมือถือ (กว้างสูงสุด 1023px)          |
| `_desktop`                | แสดงผลเฉพาะบนจอคอม (กว้าง 1024px ขึ้นไป)          |
| `_full`                   | ทำให้กว้างเต็มจอ (แม้จะอยู่ใน Container)          |