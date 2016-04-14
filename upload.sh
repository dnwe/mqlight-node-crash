while true;
  do curl -F "uploadMe=@./fixtures/5MB.dat" localhost:5000/upload;
done;
