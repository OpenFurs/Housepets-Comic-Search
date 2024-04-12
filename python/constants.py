from datetime import datetime
from dotenv import load_dotenv
import os

# loads any environment variables that are gonna be used
load_dotenv()

initial_year: int = int(2008)
current_year: int = datetime.now().year

mongo_url = os.getenv("MONGO_URL")
