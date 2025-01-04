import os

# Paths to folders and files
python_folder = r"./Python/Math-Array-String"
javascript_folder = r"./JavaScript/Math-Array-String"
index_html_file = os.path.join(javascript_folder, "index.html")
counter_file = "file_counter.txt"

# Ensure folders exist
os.makedirs(python_folder, exist_ok=True)
os.makedirs(javascript_folder, exist_ok=True)

# Read or initialize the counter
counter = int(open(counter_file).read().strip()) if os.path.exists(counter_file) else 1

# Create new files
python_file = os.path.join(python_folder, f"{counter}.py")
javascript_file = os.path.join(javascript_folder, f"{counter}.js")
open(python_file, "w").write("# Python file\n")
open(javascript_file, "w").write("// JavaScript file\n")

# Update index.html
with open(index_html_file, "r+") as f:
    html = f.read().replace(f'src="{counter - 1}.js"', f'src="{counter}.js"')
    f.seek(0)
    f.write(html)
    f.truncate()

# Save updated counter
open(counter_file, "w").write(str(counter + 1))

print(f"Created {python_file} and {javascript_file}, updated {index_html_file}")
