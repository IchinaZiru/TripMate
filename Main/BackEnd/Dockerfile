FROM python:3.12

WORKDIR /workspace

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install pandas
RUN pip install scikit-learn

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
