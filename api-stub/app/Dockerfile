FROM python:latest

COPY . /app
ADD requirements.txt /app/

RUN pip install --upgrade pip
RUN pip uninstall -r /app/requirements.txt
RUN pip install -r /app/requirements.txt
