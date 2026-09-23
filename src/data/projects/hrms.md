---
title: "HRMS"
description: "Human Resource Management System built with Spring Boot and MongoDB Atlas."

technologies:
  - Spring Boot
  - Java
  - MongoDB
github: "https://github.com/barun20saha/hrms_odoo"
live: "#"
npm: ""
timeline: "2 Months"
role: "Backend Developer"
team: "Solo"
status: "Completed"
featured: true
challenges:
  - Building robust APIs
  - Managing relational data in NoSQL
learnings:
  - Spring Security
  - Advanced MongoDB queries
isPublished: true
---

## Problem Statement

Managing employee information, attendance-related data, records, and HR operations manually can lead to duplication, inconsistent data, and unnecessary administrative work. The **Human Resource Management System (HRMS)** centralizes employee-related operations in one application and provides structured access to HR information.

## System Architecture

```
Employee / HR / Admin
        |
        v
    Frontend UI
        |
        v
 Spring Boot REST API
        |
        +-------------------+
        |                   |
        v                   v
 Business Logic        Authentication
        |
        v
   MongoDB Atlas
        |
        v
 Employee / HR Records
```

## Tech Stack

- **Backend:** Java, Spring Boot
- **API:** REST APIs
- **Database:** MongoDB Atlas
- **Frontend:** Web frontend
- **Build Tool:** Maven / Gradle
- **Development:** IntelliJ IDEA / VS Code
- **Version Control:** Git, GitHub
