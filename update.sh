#!/bin/bash
cd /var/www/content
mkdir ./logs

# pull updates and write logfile
git pull >> ./logs/$(date +%Y-%m-%d_%T)-git.log

# delete old log files
find ./logs -name "*.log" -type f -mtime +30 -delete

# cronjobs:
# 0 * * * * /bin/bash /var/www/content/update.sh
