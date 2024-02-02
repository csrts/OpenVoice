module.exports = {
  daemon: true,
  run: [{
    "method": "shell.run",
    "params": {
      "path": "app",
      "venv": "env",
      "message": "python openvoice_app.py",
      "on": [{ "event": "/http://127.0.0.1:7860", "done": true }]
    }
  }, {
    "method": "local.set",
    "params": {
      "url": "{{input.event[0]}}"
    }
  }]
}
