module.exports = {
  "cmds": {
    "nvidia": "pip install torch torchvision torchaudio xformers --index-url https://download.pytorch.org/whl/cu118",
    "amd": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm5.6",
    "default": "pip3 install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cpu"
  },
  "requires": [{
    "type": "conda",
    "name": "ffmpeg",
    "args": "-c conda-forge"
  }],
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env",
      "message": "git clone https://github.com/myshell-ai/OpenVoice app",
    }
  }, {
    "method": "shell.run",
    "params": {
      "path": "app",
      "venv": "env",
      "message": [
        "pip install -r requirements.txt"
      ]
    }
  }, {
    "method": "fs.download",
    "params": {
      "uri": "https://myshell-public-repo-hosting.s3.amazonaws.com/checkpoints_1226.zip",
      "path": "app/ckpt.zip"
    }
  }, {
    "method": "notify",
    "params": {
      "html": "单击 'start' 按扭启动OpenVoice!"
    }
  }]
}
