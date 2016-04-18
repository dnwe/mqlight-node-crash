while true;
  do curl -F "uploadMe=@./fixtures/test.txt" localhost:5000/upload;
done;
