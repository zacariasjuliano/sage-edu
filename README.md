# 🏫 SAGE Education - Institutional Management

**Version:** 1.0  
**Module:** Tryton ERP  
**Developer:** Zacarias Juliano Capingala *(Homem Marketing)*  
**Date:** 21/11/2025

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


| Perfil     | Usuário    | Senha           |
|------------|------------|-----------------|
| Student    | aluno      | sage_aluno      |
| Teacher    | docente    | sage_docente    |
| Secretary  | secretaria | sage_secretaria |
| Direction  | direcao    | sage_direcao    |
| Admin      | admin      | sage_admin      |
| Admin Eng  | admin_eng  | sage_admin      |

---

## ⚙️ SAGE Education Modules

**🎓 AMS** - Academic Management System

**🏫 SMS** - School Management System

**🏢 EIS** - Educational Information System

---


## 🌐 Homepage

**Website:** [comunidadedosaber.ao](https://comunidadedosaber.ao)  
**App:** [sage.comunidadedosaber.ao](https://sage.comunidadedosaber.ao)  
**Doc:** [docs.comunidadedosaber.ao](https://docs.comunidadedosaber.ao)  
**E-mail:** [comercial@comunidadedosaber.ao](mailto:comercial@comunidadedosaber.ao)

---

## 💬 Technical Support

If you encounter any errors or require technical support, please contact us through the channels below:

- 📧 **E-mail:** [suporte@comunidadedosaber.ao](mailto:suporte@comunidadedosaber.ao)
- 💬 **WhatsApp:** [+244 926 585 345](https://wa.me/244926585345)

---

## 📋 Installation


Before starting, make sure you have one of the following components installed in version 6.8.14 to access the client environment:

- [Tryton Server](https://www.tryton.org/)
- [Tryton Desktop Client](https://www.tryton.org/)
- [Tryton Web Client](https://www.npmjs.com/package/tryton-sao)



### 🔧 PIP Installation

It is also possible to install SAGE Edu using pip.
To do this, you will need:

* Have PostgreSQL installed and configured

Including user creation and permissions.

* Create the database

* Install modules throw PIP

```bash
pip install akademy-party
pip install akademy-company
pip install akademy-classe
```

* Create Tryton configuration file (trytond.conf)
```bash
[database]
uri = postgresql://usuario:senha@localhost:5432/banco_de_dados
```


