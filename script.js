const scenario = document.getElementById("scenario");
const output = document.getElementById("output");

scenario.addEventListener("change", () => {
  output.classList.remove("hidden");

  const s = scenario.value;

  if (s === "recon") {
    output.innerHTML = `
      <h2>🔍 Basic Reconnaissance Workflow</h2>
      <div class="step">
        <h3>Step 1: Identify Target</h3>
        <p>Ensure the target is authorized.</p>
      </div>
      <div class="step">
        <h3>Step 2: Passive Recon</h3>
        <pre><code>whois example.com
nslookup example.com</code></pre>
      </div>
      <div class="step">
        <h3>Step 3: Active Recon</h3>
        <pre><code>nmap example.com</code></pre>
      </div>
    `;
  }

  if (s === "postscan") {
    output.innerHTML = `
      <h2>🧭 What to Do After Port Scanning</h2>
      <div class="step">
        <h3>Step 1: Review Open Ports</h3>
        <pre><code>nmap -sC -sV TARGET_IP</code></pre>
      </div>
      <div class="step">
        <h3>Step 2: Research Services</h3>
        <pre><code>searchsploit apache</code></pre>
      </div>
      <div class="step">
        <h3>Step 3: Decide Next Enumeration</h3>
        <p>Web → directory scan, SSH → creds check, SMB → enum.</p>
      </div>
    `;
  }

  if (s === "serviceenum") {
    output.innerHTML = `
      <h2>🔎 Service Enumeration (Beginner)</h2>
      <div class="step">
        <h3>Step 1: Detect Services</h3>
        <pre><code>nmap -sV TARGET_IP</code></pre>
      </div>
      <div class="step">
        <h3>Step 2: Enumerate Services</h3>
        <pre><code>nmap --script vuln TARGET_IP</code></pre>
      </div>
    `;
  }

  if (s === "dir") {
    output.innerHTML = `
      <h2>📂 Directory & File Discovery</h2>
      <div class="step">
        <h3>Run Directory Brute Force</h3>
        <pre><code>gobuster dir -u http://TARGET -w /usr/share/wordlists/dirb/common.txt</code></pre>
      </div>
    `;
  }

  if (s === "webvuln") {
    output.innerHTML = `
      <h2>🌐 Basic Web Vulnerabilities</h2>
      <ul>
        <li>SQL Injection</li>
        <li>Cross-Site Scripting (XSS)</li>
        <li>File Inclusion</li>
        <li>Insecure Authentication</li>
      </ul>
    `;
  }

  if (s === "network") {
    output.innerHTML = `
      <h2>🖧 Network Scanning Practice</h2>
      <pre><code>nmap -p- TARGET_IP</code></pre>
    `;
  }

  if (s === "privesc") {
    output.innerHTML = `
      <h2>🐧 Linux Privilege Escalation (Intro)</h2>
      <div class="step">
        <h3>Check User & OS</h3>
        <pre><code>whoami
uname -a</code></pre>
      </div>
      <div class="step">
        <h3>Check Sudo Permissions</h3>
        <pre><code>sudo -l</code></pre>
      </div>
    `;
  }

  if (s === "ctf") {
    output.innerHTML = `
      <h2>🚩 CTF Beginner Workflow</h2>
      <ol>
        <li>Understand the challenge</li>
        <li>Enumerate inputs</li>
        <li>Analyze files or services</li>
        <li>Extract flag</li>
      </ol>
    `;
  }

  if (s === "ctfthink") {
    output.innerHTML = `
      <h2>🧠 Stuck in CTF? How to Think</h2>
      <ul>
        <li>Did I enumerate enough?</li>
        <li>Did I miss a file or parameter?</li>
        <li>Is this crypto, web, or forensics?</li>
        <li>Read hints carefully</li>
      </ul>
    `;
  }

  if (s === "") {
    output.classList.add("hidden");
  }
});
