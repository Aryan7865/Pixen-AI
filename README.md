# Pixen AI - Personalized AI Photo Generation Platform

Transform your photos with the power of AI! **Pixen AI** is the ultimate solution for generating professional AI-enhanced photos, perfect for LinkedIn headshots, Instagram content, dating profile pictures, and more. Train an AI model on your personal images and generate stunning, high-quality AI-generated photos within minutes.

[![Watch Tutorial Video](https://img.shields.io/badge/Watch-Tutorial%20Video-red)](https://www.youtube.com/watch?v=7AQNeii5K7E)
[![GitHub Stars](https://img.shields.io/github/stars/codebucks27/Pictoria-AI-Starter-Code?style=social)](https://github.com/codebucks27/Pictoria-AI-Starter-Code)

🎯 **For custom solutions or deployment, contact:** [Pixen AI Contact Form](https://tally.so/r/wdlj0N)

> **NOTE:** This is the final version of the project. Ensure thorough testing before going live.

## 🚀 Key Features  

- 🛠️ Fully built SaaS platform using **Next.js**
- 💻 Beautiful and responsive landing page
- 🤖 Train AI models on your personal images
- 🖥️ Intuitive event monitoring dashboard
- 🎯 AI-powered professional photo generation
- 🎨 Custom AI model training
- 💼 Generate high-quality LinkedIn headshots
- 🌟 Modern UI built with **shadcn-ui**
- 📱 Social media content generation
- 💳 Integrated **Stripe** payment system
- ✉️ Automated email notifications
- 📊 Usage analytics dashboard
- 🎁 ...and much more!

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS, Shadcn UI
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **AI Integration:** Replicate AI API
- **Payment Processing:** Stripe
- **Email Service:** Resend
- **Language:** TypeScript

## ⚡ Prerequisites

Before setting up, ensure you have:
- Node.js installed (**v20.x recommended, v18+ supported**)
- A Supabase account
- A Replicate AI account
- A Stripe account
- A Resend email service account

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Pixen-AI.git
cd Pixen-AI # Navigate to the project directory
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory. Refer to `.env.example` for the required variables.

### 4. Supabase Database Setup

1. Create a new Supabase project
2. Add a storage bucket named `generated_images`
3. Execute SQL queries from `supabase-queries.md` in the Supabase SQL editor
4. Configure database triggers and functions
5. Set up correct RLS policies (**Refer to tutorial video for details**)

### 5. AI Model Setup

Train your AI models using these links:
- [Flux Dev LORA model trainer](https://replicate.com/ostris/flux-dev-lora-trainer/train)
- [Flux Dev Model](https://replicate.com/black-forest-labs/flux-dev)
- [Flux Schnell Model](https://replicate.com/black-forest-labs/flux-schnell)

For stock images (not for training), [Lummi AI](https://www.lummi.ai/) is recommended.

### 6. AI Model Training Requirements

For optimal model training, use **10-15 images** with the following breakdown:
- **6 close-up facial shots**
- **3-4 half-body shots**
- **2-3 full-body shots**
- No accessories covering the face
- A variety of expressions, clothing, and backgrounds
- Images should be **1:1 resolution** (minimum **1048x1048**)
- Total size should not exceed **45MB**

### 7. Stripe Payment Setup

Follow the [Stripe Setup Tutorial](https://www.youtube.com/watch?v=7AQNeii5K7E&t=27960s) for integration.

### 8. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` to view the application.

## 📦 Project Structure

```
├── app/                 # Next.js 15 app directory
├── components/         # React components
├── lib/               # Utility, Supabase & Stripe functions
├── public/            # Static assets
└── globals.css            # Global styles
```

## 💰 Pricing Plans

- **Hobby**: 1 trained model/month, 100 images/month
- **Pro**: 2 trained models/month, 300 images/month
- **Enterprise**: 5 trained models/month, unlimited images

## 📝 License

This project is under a **custom restrictive license**. Read `LICENSE.md` before using the code.

- ❌ No commercial use allowed
- ❌ No redistribution or reselling
- ❌ No modification for commercial purposes
- ✅ Personal and educational use only

