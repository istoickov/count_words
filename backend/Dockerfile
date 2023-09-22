# Use an official Python runtime as the base image for the backend
FROM python:3.8-slim as backend

# Set the working directory to /app/backend
WORKDIR /app/backend

# Copy the Python requirements file
COPY backend/requirements.txt ./

# Install backend dependencies
RUN pip install -r requirements.txt

# Copy the FastAPI application code into the container
COPY backend ./

# Expose port 8000
EXPOSE 8000

# Define the command to run the FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
