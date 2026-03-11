# 🏫 SAGE Education - Institutional Management / ERP

**Version:** 1.3.x  
**Module:** Tryton ERP Version 7.0 
**Developer:** Zacarias Juliano Capingala *(FPC)*     


---


## 📘 About the Project

**SAGE Education** is a ***free and open-source*** project for ***educators, educational institutions, and governments***.
It provides the functionality of **Academic Management System (AMS), School Management System (SMS), and Educational Information System (EIS)**.
Its ***modular, scalable, and secure*** design allows it to be implemented in many different scenarios: from **small schools** and **training centers** to **large national public education systems**.

SAGE Education has a growing, committed, and friendly community that brings together the best in the fields of ***educational sciences, pedagogy, educational technology, and computer science***.
No matter where in the world you live, we are passionate about upholding education and educational technology as a non-negotiable human right.

We hope you find **SAGE Education** motivating and inspiring, and we look forward to having you as part of the team.


We host a public demo server where you can try out SAGE Education with different access profiles:
[sage.comunidadedosaber.ao](https://sage.comunidadedosaber.ao)  

![Alternative text](img/sage-edu.png)

| Profile    | User      | Password        |
|------------|-----------|-----------------|
| Student    | student   | sage_education  |
| Teacher    | teacher   | sage_education  |
| Secretary  | secretary | sage_education  |
| Direction  | direction | sage_education  |
| Admin      | admin     | sage_admin      |


---


## ⚙️ SAGE Education Modules

**🎓 AMS** - Academic Management System

**🏫 SMS** - School Management System

**🏢 EIS** - Educational Information System

### 🎯 Core Purpose

SAGE Education centralizes **all aspects of school management**, including:
- Institutional organization
- Academic structure and courses
- Student enrollment and transfers
- Class management, teachers, and attendance
- Evaluations and metrics
- Reports, dashboards, and user interfaces

### ✨ Modules Overview

#### 🏛️ Akademy Party – Base Party Management
- Extend Tryton `Party` model for students, employees, teachers, and institutions
- Standardized base for other modules
- Data consistency and reusability

#### 🏢 Akademy Company – Institutional Management
- Manage institutions, companies, and parties
- Employee registration and roles
- Student registration and supervisor relationships
- Institutional reporting

#### 🏫 Akademy Class – Academic & Class Management
- Academic levels, areas, courses, and classes
- Class schedules, classrooms, and lessons
- Teacher and student assignments
- Attendance tracking for students and teachers
- Study plans, disciplines, evaluation metrics
- Academic reports (class, teacher, student, study plan)

#### 📝 Akademy Matriculation – Enrollment & Applications
- Candidate registration and application management
- Evaluation of applications according to defined criteria
- Student transfers (internal and external)
- Association of students to courses and disciplines
- Enrollment reports, transfer reports, equivalence reports

#### ✅ Akademy Matriculation Confirmation – Enrollment Confirmation
- Wizard-based confirmation of new matriculations
- Modification of existing matriculations
- Stepwise, auditable workflows for enrollment

#### 📊 Akademy Dashboard – User Interface & Dashboards
- Main menu creation for SAGE Education
- Personalized dashboards for each user type
- Display of metrics, notifications, and tasks
- Integration with academic and administrative modules


---


## 🌍 Target Audience

- Educational institutions
- System administrators
- Open-source contributors
- Governments and NGOs
- Educational software integrators


### 🌐 Homepage
  
**Website:** [sage-edu.comunidadedosaber.ao](https://sage-edu.comunidadedosaber.ao)  
**App:** [sage.comunidadedosaber.ao](https://sage-edu.comunidadedosaber.ao)  
**Docs:** [docs.comunidadedosaber.ao](https://sage-edu.comunidadedosaber.ao)  
**Team:** [comunidadedosaber.ao](https://comunidadedosaber.ao)  
**PyPi:** [SAGE Edu](https://pypi.org/user/comunidade_do_saber)


---


## 🤝 Contributing

Contributions are welcome!
Please open an issue or submit a pull request following the SAGE Edu contribution guidelines.

### 💬 Technical Support

If you encounter any errors or require technical support, please contact us through the channels below:

- 📧 **E-mail:** 
    -   [suporte@comunidadedosaber.ao](mailto:suporte@comunidadedosaber.ao)
    -   [comercial@comunidadedosaber.ao](mailto:comercial@comunidadedosaber.ao)   
- 💬 **WhatsApp:** [+244 955 868 110](https://wa.me/244955868110)


---


## 📦 SAGE Edu Installation

To install SAGE Edu, simply download the installation script and run it on your server:

👉 [Download Installation Script](https://raw.githubusercontent.com/zacariasjuliano/sage-edu/refs/heads/main/scripts/sage_edu-install.sh)

Then, make the script executable and run:

```bash
chmod +x sage_edu-install.sh
./sage_edu-install.sh
```


