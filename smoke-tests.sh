sleep 5

echo "it should serve application..."
if curl http://localhost:3000 | grep -e "URL Shortener";
  then
    printf "\n- application loaded successfully\n"
    exit 0
  else
    printf "\n- application failed to load\n"
    exit 1
fi
