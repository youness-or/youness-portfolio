import sys
import PyPDF2

def read_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            print("---PDF_START---")
            print(text)
            print("---PDF_END---")
    except Exception as e:
        print("Error:", str(e))

if __name__ == "__main__":
    if len(sys.argv) > 1:
        read_pdf(sys.argv[1])
    else:
        print("Please provide a file path.")
