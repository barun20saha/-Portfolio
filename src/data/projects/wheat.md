---
title: "Wheat/Rice Disease Detection"
description: "Deep-learning-based plant disease classification using EfficientNet."

technologies:
  - Python
  - Deep Learning
  - EfficientNet
github: "https://github.com/barun20saha/wheat-disease-classifier.git"
live: "#"
npm: ""
timeline: "1.5 Months"
role: "ML Engineer"
team: "Solo"
status: "Completed"
featured: true
challenges:
  - Image dataset cleaning
  - Model tuning and optimization
learnings:
  - Transfer learning techniques
  - Model deployment
isPublished: true
---

## Problem Statement

Plant diseases can significantly reduce crop yield and quality. Manual disease identification depends on expert knowledge, can take time, and may not be consistently available to farmers. This project uses deep learning to automatically classify diseases from plant images and provide a faster preliminary diagnosis.

## System Architecture

```
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

## Tech Stack

- **Programming:** Python
- **Deep Learning:** PyTorch / EfficientNet
- **Computer Vision:** Image preprocessing and augmentation
- **Model:** EfficientNet
- **Dataset:** Wheat/Rice disease image datasets
- **Training:** Google Colab / Kaggle GPU
- **Libraries:** NumPy, Pandas, Pillow, OpenCV, Matplotlib
- **Version Control:** Git, GitHub
