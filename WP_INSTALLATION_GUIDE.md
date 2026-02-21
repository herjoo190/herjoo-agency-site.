# 🌐 WordPress Installation Guide: Herjoo Online Solutions

Follow this guide to set up WordPress for your premium digital agency. This guide covers the most common methods used by South African hosting providers (like Xneelo, Afrihost, or HostAfrica).

---

## 📋 1. Prerequisites
Before you begin, ensure you have:
1.  **Domain Name**: (e.g., `herjoo.co.za`) registered and pointed to your host.
2.  **Web Hosting**: A Linux-based server with PHP (7.4+) and MySQL/MariaDB.
3.  **SSL Certificate**: Ensure HTTPS is active for "Professional Decorum."

---

## 🚀 2. Method A: Automatic (Recommended)
Most modern hosts use **cPanel** or **DirectAdmin** with "1-Click Installers" (Softaculous).

1.  **Login**: Log into your hosting control panel.
2.  **Find App Installer**: Look for the **Softaculous** or **WordPress** icon.
3.  **Install Now**: Click "Install" and fill in the details:
    - **Protocol**: Choose `https://`.
    - **Site Name**: Herjoo Online Solutions.
    - **Admin Username**: *Avoid using 'admin' for security.*
    - **Admin Password**: Use a strong, generated password.
4.  **Finish**: Click "Install." Your site will be live in seconds at your domain.

---

## 🛠️ 3. Method B: Manual (The "Pro" Way)
Use this if your host doesn't have an auto-installer or if you want total control.

### Step 1: Create a Database
1.  In your hosting panel, go to **MySQL Databases**.
2.  Create a new database (e.g., `herjoo_wpdb`).
3.  Create a database user and a strong password.
4.  **Crucial**: Add the user to the database and grant "All Privileges."

### Step 2: Upload Files
1.  Download the latest WordPress from [WordPress.org](https://wordpress.org/download/).
2.  Unzip the files and upload them to your server's `public_html` directory via **FTP** (using FileZilla) or the **File Manager**.

### Step 3: Run the Installer
1.  Visit your domain in a browser.
2.  Select your language and click "Let's Go."
3.  Enter the **Database Name, Username, and Password** you created in Step 1.
4.  Run the installation.

---

## 🎨 4. Post-Installation Checklist
Once installed, log into your dashboard (`yourdomain.co.za/wp-admin`):

1.  **Clean Up**: Delete the "Hello World" post and default plugins (Akismet/Hello Dolly).
2.  **Permalinks**: Go to **Settings > Permalinks** and set to **"Post Name"** for SEO.
3.  **Theme Upload**: 
    - Go to **Appearance > Themes > Add New > Upload Theme**.
    - If you have a custom Herjoo theme zip, upload it here.
4.  **Essential Plugins**:
    - **SEO**: RankMath or Yoast.
    - **Security**: Wordfence.
    - **Performance**: WP Rocket or LiteSpeed Cache.

---

> [!TIP]
> **Design Note**: If you are porting the custom `index.html` design to WordPress, ensure you use a "Starter Theme" or a Page Builder like Elementor/Bricks to maintain the "Chocolaty Luxury" aesthetic.

*Generated for Herjoo Online Solutions Audit System*
