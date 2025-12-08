#!/bin/bash

echo "🏫 SAGE Education - Gestão Institucional"
echo "Version: 1.0"
echo "Module:** Tryton ERP "  
echo "Developer: Zacarias Juliano Capingala *(Homem Marketing)*"
echo "Date: 21/11/2025"

echo "🚀 Install SAGE Edu..."

# -----------------------------
# 1. Install PostgreSQL
# -----------------------------
echo "📦 Install PostgreSQL"
sudo apt update
sudo apt install -y postgresql postgresql-contrib


echo "👤 Create de user profile and the data base"

sudo -u postgres createuser -s sage_edu
sudo -u postgres psql -c "ALTER ROLE sage_edu WITH PASSWORD 'sage_edu';"

sudo -u postgres createdb -O sage_edu sage_edu_db

# -----------------------------
# 2. Install Python + Config Virtualenv
# -----------------------------
echo "🐍 Install Python + Config Virtualenv"
sudo apt install -y python3 python3-venv python3-pip


cd ~
python3 -m venv sage_education
cd ~/sage_education
source ./bin/activate

# -----------------------------
# 3. Install SAGE Edu
# -----------------------------
echo "📚 Install SAGE Edu Modules"
pip install --upgrade pip
pip install akademy-classe #akademy-company #akademy-party #trytond


echo "📝 Create the file configuration trytond.conf..."

cat << EOF > trytond.conf
[database]
uri = postgresql://sage_edu:sage_edu@localhost:5432/
path = ~/sage_education

[web]
listen = 127.0.0.1:8000

EOF

# -----------------------------
# 4. Inicialize the data base
# -----------------------------
echo "🛠 Install Modules..."

trytond-admin -c trytond.conf -d sage_edu_db --all

echo "🎉 Instalation finish!"
echo "Now you can run the server, by run:"
echo "source ./bin/activate && trytond -c trytond.conf"


echo "The SAGE Edu is running:"
source ./bin/activate && trytond -c trytond.conf
