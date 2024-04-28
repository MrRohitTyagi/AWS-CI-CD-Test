//👉⭐ build a docker image
"docker build -t [image-name] .";
"-t is the image name";
". is the current directory";

//👉⭐ run a docker container
"docker run -dp 5000:5000 [image-name]"
// or one with container name 
"docker run -dp 5000:5000 --name [container-name] [image-name]"
