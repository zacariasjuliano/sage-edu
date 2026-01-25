#!/bin/bash

echo "🏫 SAGE Education - Institutional Management"
echo "Version: 1.2.x"
echo "Module:** Tryton ERP Version 7.0"  
echo "Developer: Zacarias Juliano Capingala *FPC*"

echo "🚀 Install SAGE Edu..."


# -----------------------------
# 1. Install PostgreSQL
# -----------------------------
echo "📦 Install PostgreSQL"
sudo apt update && upgrade
sudo apt install -y postgresql postgresql-contrib

echo "👤 Create de user profile and the data base"

sudo -u postgres createuser -s sage_edu
sudo -u postgres psql -c "ALTER ROLE sage_edu WITH PASSWORD 'sage_edu';"
sudo -u postgres psql -c "DROP DATABASE sage_education;"
sudo -u postgres psql -c "CREATE DATABASE sage_education;" 


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
pip install akademy-party~=1.1.0
pip install akademy-company~=1.1.0
pip install akademy-classe~=1.1.0
pip install akademy-matriculation~=1.1.0
pip install akademy-matriculation-confirmation~=1.1.0
pip install akademy-dashboard~=1.1.0
pip install trytond-currency==7.0.0
pip install trytond-party-avatar==7.0.0
pip install proteus==7.0.0


echo "📝 Create the file configuration trytond.conf..."

cat << EOF > trytond.conf
[database]
uri = postgresql://sage_edu:sage_edu@localhost:5432/sage_education
path = ~/sage_education

[web]
listen = 0.0.0.0:8000

EOF


# -----------------------------
# 4. Inicialize the data base
# -----------------------------
echo "🛠 Install Modules..."

trytond-admin -c trytond.conf -d sage_education --all

echo "🎉 Instalation finish!"
echo "Now you can run the server, by run:"
echo "source ./bin/activate && trytond -c trytond.conf"

echo "The SAGE Edu is running:"
#source ./bin/activate && trytond -c trytond.conf
trytond -c trytond.conf
