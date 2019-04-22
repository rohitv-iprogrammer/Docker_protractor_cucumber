FROM node:carbon
LABEL maintainer = "rohit vyas"

# Add files and folders to container.
ADD ["package.json", "entrypoint.sh","./package-lock.json", "/e2e/"]

WORKDIR /e2e

RUN chmod +x entrypoint.sh
# Install and initialize Behat.
#RUN npm install -g protractor \
 #   && webdriver-manager update \
  #  && npm install -g cucumber

RUN npm install


RUN echo "Hello Testes, I'm almost there, please wait..."

RUN echo "Hell is here .....2222223333"

ENTRYPOINT ["/e2e/entrypoint.sh"]
