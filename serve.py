"""Local preview server with caching turned off.

Python's built-in `http.server` lets browsers cache JS/CSS, so edits to
js/data.js or css/styles.css can look like they "didn't work" until you
hard-refresh. This server tells the browser not to cache, so a normal
refresh always shows your latest changes.

Usage:
    python serve.py          # http://127.0.0.1:8000
    python serve.py 8765     # pick a different port
"""
import http.server
import os
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    os.chdir(os.path.dirname(os.path.abspath(__file__)))  # always serve the site folder
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), NoCacheHandler)
    print(f"Serving portfolio at http://127.0.0.1:{port}  (Ctrl+C to stop)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
