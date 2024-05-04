//👉⭐ build a docker image
"docker build -t [image-name] .";
"-t is the image name";
". is the current directory";

//👉⭐ run a docker container

"docker run -dp 5000:5000 [image-name]";
// or one with container name
"docker run -d -p 5000:5000 --name [container-name] [image-name]";
// to sync the files with current working dir (%cd% will return current dir in windows)
"docker run -d -p 5000:5000 -v %cd%:/app --name [container-name] [image-name]";

//👉⭐  container delete/remove
"docker rm [image-cont-name/cont-id] -f";
