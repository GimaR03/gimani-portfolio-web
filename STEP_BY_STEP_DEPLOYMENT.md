# 🚀 Step-by-Step Deployment Guide for Your Portfolio

Follow these steps **exactly** to deploy your portfolio website.

---

## 📋 PRE-DEPLOYMENT CHECKLIST

Before starting, make sure:
- ✅ Your code is working locally
- ✅ All images are in `frontend/public/images/` folder
- ✅ EmailJS is configured (if using contact form)
- ✅ You have a GitHub account

---

## 🎯 STEP 1: Test Your Build Locally

**First, let's make sure everything works:**

1. Open PowerShell or Command Prompt
2. Navigate to your project:
   ```powershell
   cd "D:\My projects\1st year 2nd sem\paired\My-Port-Folio\frontend"
   ```
3. Install dependencies (if not done):
   ```powershell
   npm install
   ```
4. Test the build:
   ```powershell
   npm run build
   ```
5. If build succeeds ✅, you're ready! If errors occur, fix them first.

---

## 📦 STEP 2: Initialize Git (If Not Done)

1. Open PowerShell in your project folder:
   ```powershell
   cd "D:\My projects\1st year 2nd sem\paired\My-Port-Folio"
   ```

2. Check if git is initialized:
   ```powershell
   git status
   ```

3. **If you see "not a git repository"**, initialize git:
   ```powershell
   git init
   ```

4. Create `.gitignore` file (if not exists) in the root folder:
   ```
   node_modules/
   .env
   .env.local
   build/
   .DS_Store
   *.log
   ```

5. Add all files:
   ```powershell
   git add .
   ```

6. Make your first commit:
   ```powershell
   git commit -m "Initial commit - Portfolio ready for deployment"
   ```

---

## 🐙 STEP 3: Push Code to GitHub

### 3.1 Create GitHub Repository

1. Go to **https://github.com** and sign in
2. Click the **"+"** icon in top right → **"New repository"**
3. Repository name: `my-portfolio` (or any name you like)
4. Description: "My Portfolio Website"
5. Choose **Public** (free tier)
6. **DO NOT** check "Initialize with README"
7. Click **"Create repository"**

### 3.2 Connect Local Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

1. **Add remote** (replace YOUR_USERNAME with your GitHub username):
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   ```

2. **Rename branch to main**:
   ```powershell
   git branch -M main
   ```

3. **Push to GitHub**:
   ```powershell
   git push -u origin main
   ```

4. You'll be asked for GitHub username and password (use Personal Access Token if 2FA is enabled)

---

## 🌐 STEP 4: Deploy to Vercel (Easiest Method)

### 4.1 Sign Up for Vercel

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### 4.2 Import Your Project

1. After signing in, click **"Add New Project"**
2. You'll see your GitHub repositories
3. Find and click **"Import"** next to `my-portfolio`

### 4.3 Configure Build Settings

**IMPORTANT - Set these correctly:**

1. **Root Directory**: Click "Edit" and set to: `frontend`
2. **Framework Preset**: Should auto-detect "Create React App"
3. **Build Command**: `npm run build` (should be auto-filled)
4. **Output Directory**: `build` (should be auto-filled)
5. **Install Command**: `npm install` (should be auto-filled)

### 4.4 Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build to complete
3. ✅ **Your site is now live!**

### 4.5 Get Your Live URL

After deployment:
- Your site will be at: `https://my-portfolio-xxxxx.vercel.app`
- You can change this in Project Settings → Domains

---

## 🔄 STEP 5: Automatic Deployments (Bonus)

**Every time you push code to GitHub, Vercel will automatically redeploy!**

1. Make changes to your code
2. Commit and push:
   ```powershell
   git add .
   git commit -m "Updated portfolio"
   git push
   ```
3. Vercel will automatically rebuild and deploy! 🎉

---

## 🎨 STEP 6: Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name (e.g., `gimani.dev`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

---

## ✅ VERIFICATION CHECKLIST

After deployment, verify:

- [ ] Site loads at the Vercel URL
- [ ] All pages work (Home, About, Skills, Projects, Contact)
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Contact form works (if EmailJS is configured)
- [ ] Mobile responsive
- [ ] Dark mode works

---

## 🐛 TROUBLESHOOTING

### Build Fails on Vercel

**Problem**: Build error
**Solution**: 
1. Check build logs in Vercel dashboard
2. Make sure `Root Directory` is set to `frontend`
3. Verify `package.json` has correct scripts

### Images Not Loading

**Problem**: Images show broken
**Solution**: 
- Make sure images are in `frontend/public/images/`
- Use `/images/filename.png` in code (not `./images/`)

### 404 Errors on Routes

**Problem**: Direct URL access gives 404
**Solution**: 
- Already fixed! `vercel.json` file handles this ✅

### Contact Form Not Working

**Problem**: Form doesn't send emails
**Solution**: 
- Configure EmailJS credentials in `contactme.jsx`
- Add EmailJS keys as environment variables in Vercel (Settings → Environment Variables)

---

## 📱 QUICK REFERENCE

### Update Your Site

```powershell
# 1. Make changes to your code
# 2. Commit changes
git add .
git commit -m "Your update message"
git push

# 3. Vercel automatically deploys! ✨
```

### View Deployment Status

- Go to **https://vercel.com/dashboard**
- Click on your project
- See all deployments and their status

---

## 🎉 CONGRATULATIONS!

Your portfolio is now live on the internet! Share your URL with the world!

**Next Steps:**
- Add your portfolio URL to your resume
- Share on LinkedIn
- Update your GitHub profile
- Add to your email signature

---

## 📞 NEED HELP?

If you get stuck:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all file paths are correct
4. Make sure all dependencies are in `package.json`

---

**Your portfolio URL will be something like:**
`https://my-portfolio-xxxxx.vercel.app`

**Share it proudly! 🚀**

