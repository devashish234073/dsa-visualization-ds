import os
import re

def scan_folders(current_path):
    try:
        entries = os.listdir(current_path)
        folders = [entry for entry in entries if os.path.isdir(os.path.join(current_path, entry)) and not entry.startswith(".")]

        if folders:
            with open("index.html_", "r") as file:
                index_content = file.read()

            index_split_literal = "[A_TAGS]"
            index_content_split = index_content.split(index_split_literal)

            if len(index_content_split) == 2:
                prefix = index_content_split[0]
                mid = ""
                suffix = index_content_split[1]

                if prefix and suffix:
                    for folder in folders:
                        parts = re.split('(?=[A-Z])', folder)
                        html = parts[0].lower() + ''.join(parts[1:]) + ".html"
                        link_name = ' '.join(parts)
                        mid += f"<li><a href=\"{html}\">{link_name}</a></li>\r\n"

                    print(mid)

                    if mid:
                        content = prefix + mid + suffix
                        print("updated content:", content)

                        with open("index.html", "w") as output_file:
                            output_file.write(content)

    except Exception as e:
        print('Error:', str(e))

current_path = os.getcwd()
scan_folders(current_path)
