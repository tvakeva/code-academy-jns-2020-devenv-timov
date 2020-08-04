FROM noordsestern/robotframework:latest

RUN  apt-get update \
  && apt-get install -y xvfb

COPY requirements.txt .
# install RF libraries for Python2
RUN pip install --no-cache-dir -r requirements.txt

# install RF libraries for Python3
RUN pip3 install --no-cache-dir -r requirements.txt