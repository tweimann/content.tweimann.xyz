#!/bin/bash
cd /var/lib/docker/volumes/860356b8d86015675a19c0e3d6105e6ecf6ecd0de035cf970266ee62377f23c7/_data
mkdir ./logs

# pull updates and write logfile
git pull >> ./logs/$(date +%Y-%m-%d_%T)-git.log

# delete old log files
find ./logs -name "*.log" -type f -mtime +30 -delete

# cronjobs:
# 0 * * * * /bin/bash /var/lib/docker/volumes/860356b8d86015675a19c0e3d6105e6ecf6ecd0de035cf970266ee62377f23c7/_data/update.sh
