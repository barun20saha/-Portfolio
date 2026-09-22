# Project Documentation

This document summarizes the projects in a consistent format:

1. **System Architecture**
2. **Problem Statement**
3. **Tech Stack**

---

## 1. Aqua Marine

### System Architecture

```text
User / Government / Field Personnel
                |
                v
        Web / Mobile Interface
                |
                v
          Backend / API Layer
                |
        +-------+--------+
        |                |
        v                v
   AI/ML Services    Application Logic
        |                |
        +-------+--------+
                |
                v
          Database / Storage
                |
                v
        Reports / Insights
```

**Architecture flow:**  
Users interact with the application through the frontend. Requests are processed by the backend and routed to the required application logic or AI/ML services. The system stores application data and generated results in persistent storage and presents actionable information back to the user.

### Problem Statement

Real-world problems often involve fragmented data, manual processes, delayed decision-making, and limited access to intelligent tools. **Aqua Marine** is designed as a Smart India Hackathon solution that applies technology to a practical real-world problem, with the goal of reducing manual effort and providing a more efficient, data-driven workflow.

### Tech Stack

- **Frontend:** Web/Mobile UI
- **Backend:** REST API / Application Server
- **AI/ML:** Python-based ML components where required
- **Database:** To be finalized according to deployment
- **Tools:** Git, GitHub
- **Deployment:** Web/cloud deployment as applicable

> Add the exact Aqua Marine-specific technologies here if your final SIH implementation used a particular framework/database.

---

## 2. Wheat/Rice Disease Detection

### System Architecture

```text
Plant Leaf Image
       |
       v
Image Upload / Input
       |
       v
Preprocessing
(Resize / Normalize)
       |
       v
EfficientNet Classifier
       |
       v
Disease Prediction
       |
       +------------------+
       |                  |
       v                  v
Disease Class        Confidence Score
       |                  |
       +--------+---------+
                |
                v
         Result / Recommendation
```

### Problem Statement

Plant diseases can significantly reduce crop yield and quality. Manual disease identification depends on expert knowledge, can take time, and may not be consistently available to farmers. The project uses deep learning to automatically classify diseases from plant images and provide a faster preliminary diagnosis.

### Tech Stack

- **Programming:** Python
- **Deep Learning:** PyTorch / EfficientNet
- **Computer Vision:** Image preprocessing and augmentation
- **Model:** EfficientNet
- **Dataset:** Wheat/Rice disease image datasets
- **Training:** Google Colab / Kaggle GPU
- **Libraries:** NumPy, Pandas, Pillow, OpenCV, Matplotlib
- **Deployment:** Web/API interface as applicable
- **Version Control:** Git, GitHub

---

## 3. HRMS

### System Architecture

```text
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

### Problem Statement

Managing employee information, attendance-related data, records, and HR operations manually can lead to duplication, inconsistent data, and unnecessary administrative work. The **Human Resource Management System (HRMS)** centralizes employee-related operations in one application and provides structured access to HR information.

### Tech Stack

- **Backend:** Java, Spring Boot
- **API:** REST APIs
- **Database:** MongoDB Atlas
- **Frontend:** Web frontend
- **Build Tool:** Maven / Gradle
- **Development:** IntelliJ IDEA / VS Code
- **Version Control:** Git, GitHub

---

## 4. SmartClass Manager

### System Architecture

```text
Admin / Faculty
      |
      v
 Class Management UI
      |
      v
 Backend / REST API
      |
      +----------------------+
      |                      |
      v                      v
Allocation Engine       Maintenance Module
      |                      |
      +----------+-----------+
                 |
                 v
             Database
                 |
                 v
        Timetable / Room Status
```

### Problem Statement

Educational institutions often manage classroom allocation, room availability, and maintenance information manually. This can result in room conflicts, inefficient utilization, and difficulty tracking classroom issues. **SmartClass Manager** aims to provide a centralized system for real-time classroom allocation and classroom maintenance management.

### Tech Stack

- **Frontend:** Web UI
- **Backend:** REST-based application backend
- **Database:** Persistent relational/document database
- **Core Logic:** Classroom allocation and scheduling
- **Real-time Features:** Live classroom/room availability
- **Tools:** Git, GitHub
- **Deployment:** Web/server environment

---

## 5. Annapurna

### System Architecture

```text
Farmer
  |
  v
Web / Mobile Interface
  |
  v
AI Farming Assistant
  |
  +--------------------+-------------------+
  |                    |                   |
  v                    v                   v
Crop Information    Disease/AI Model    Agricultural Data
  |                    |                   |
  +--------------------+-------------------+
                       |
                       v
              Recommendation Engine
                       |
                       v
              Farmer-friendly Advice
```

### Problem Statement

Farmers often need to make decisions about crops, diseases, and agricultural practices using information that may be difficult to access or interpret. **Annapurna** is an AI-powered farming companion intended to combine agricultural information with AI-based assistance so that farmers can receive more accessible and actionable guidance.

### Tech Stack

- **AI/ML:** Python, Machine Learning / Deep Learning
- **AI Assistant:** NLP / AI-based recommendation
- **Backend:** REST API / application backend
- **Frontend:** Web or mobile interface
- **Data:** Agricultural datasets and domain information
- **Database:** Application database
- **Tools:** Git, GitHub

---

## 6. SatQuery AI

### System Architecture

```text
User
 |
 v
React Frontend
 |
 v
Query / VQA API
 |
 v
Query Agent / Model Router
 |
 +----------------------+----------------------+
 |                                             |
 v                                             v
Optical Change Detection              Optical + SAR Change Detection
 |                                             |
 v                                             v
Remote-Sensing Features                 SAR / Optical Fusion
 |                                             |
 +----------------------+----------------------+
                        |
                        v
                 Qwen2-VL VQA Model
                        |
                        v
                  Answer Generation
                        |
                        v
              Grounded User Response
```

### Problem Statement

Traditional remote-sensing analysis often requires specialized tools and manual interpretation of satellite imagery. Asking natural-language questions about satellite image changes, especially when combining optical and SAR data, is difficult for non-expert users. **SatQuery AI** aims to provide a conversational interface for bi-temporal remote-sensing analysis, allowing users to ask questions about changes between satellite observations and receive AI-generated answers.

### Tech Stack

**AI / Machine Learning**
- PyTorch
- Hugging Face Transformers
- Qwen2-VL
- Vision-Language Models (VLM)
- QLoRA
- LoRA / PEFT
- CLIP
- ViT
- BLIP
- SAM
- YOLO

**Remote Sensing / Computer Vision**
- GDAL
- Rasterio
- GeoPandas
- OpenCV
- GeoTIFF
- Optical satellite imagery
- Sentinel-1 SAR imagery
- Bi-temporal change detection

**Backend**
- FastAPI
- Spring Boot
- REST APIs
- Swagger / OpenAPI
- Kafka

**Database / Storage**
- PostgreSQL
- PostGIS
- Redis
- MinIO / S3-compatible storage

**Frontend**
- React
- Leaflet / Mapbox
- Vite

**Deployment / Infrastructure**
- Docker
- CUDA
- ONNX / TensorRT
- GitHub Actions

**Datasets / Resources**
- BigEarthNet / BigEarthNet-S1
- CDVQA
- VRSBench
- Sentinel-1 SAR data
- Optical change-detection datasets

---

## 7. MyAccounts

### System Architecture

```text
User
 |
 v
Android Application
 |
 v
Expense / Income Manager
 |
 +-------------------+
 |                   |
 v                   v
Local Data       Analytics
Storage              |
 |                   |
 +---------+---------+
           |
           v
     Dashboard / Reports
```

### Problem Statement

Managing personal finances using notebooks or disconnected applications can make it difficult to track income, expenses, spending patterns, and account balances. **MyAccounts** is designed as a personal money-management application that organizes financial records and presents them through a simple dashboard.

### Tech Stack

- **Platform:** Android
- **Language:** Java / Kotlin as applicable
- **UI:** Android UI
- **Database:** Local/mobile database
- **Build:** Gradle
- **IDE:** Android Studio
- **Version Control:** Git, GitHub

---

## 8. Developer Command Center

### System Architecture

```text
Developer
    |
    v
Windows Desktop UI
    |
    v
Command / Task Controller
    |
    +-------------------+-------------------+
    |                   |                   |
    v                   v                   v
System Tools        Development Tools    Utilities
    |                   |                   |
    +-------------------+-------------------+
                        |
                        v
                Results / Logs / Status
```

### Problem Statement

Developers frequently switch between terminals, development tools, system utilities, project folders, and repetitive commands. This increases context switching and wastes time. **Developer Command Center** is intended to centralize commonly used developer and system operations into one Windows application.

### Tech Stack

- **Platform:** Windows
- **Language:** Python / desktop application stack as applicable
- **System Integration:** Windows commands and utilities
- **UI:** Desktop GUI
- **Automation:** Script and command execution
- **Version Control:** Git, GitHub

---

## Project Summary

| Project | Main Domain | Core Technology |
|---|---|---|
| Aqua Marine | Smart India Hackathon / Real-world solution | Web + Backend + AI/ML |
| Wheat/Rice Disease Detection | Computer Vision / Agriculture | EfficientNet + Deep Learning |
| HRMS | Enterprise Software | Spring Boot + MongoDB Atlas |
| SmartClass Manager | EdTech / Scheduling | Web + Backend + Allocation Logic |
| Annapurna | AI + Agriculture | AI/ML + Agricultural Data |
| SatQuery AI | Remote Sensing + VLM | Qwen2-VL + QLoRA + SAR/Optical |
| MyAccounts | Android / FinTech utility | Android + Local Data |
| Developer Command Center | Developer Productivity | Windows + Automation |

---

## Notes

The sections marked with **"as applicable"** or **"to be finalized"** should be replaced with the exact frameworks and services used in the final implementation. This keeps the document technically accurate instead of assuming technologies that may not have been part of the actual project.
