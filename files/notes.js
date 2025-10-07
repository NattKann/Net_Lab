const notesContent = `1(a) Comparative Analysis: System Administration vs Network Administration
🔹 Concept Explanation:

System Administration deals with maintaining computer systems — OS management, user control, process monitoring, and system performance.

Network Administration focuses on maintaining communication between systems — IP configuration, monitoring traffic, and troubleshooting connectivity.

Feature	System Administration	Network Administration
Main Focus	Managing OS, users, applications	Managing routers, switches, IPs
Example Tools	tasklist, ps, services.msc	ping, tcpdump, ipconfig
Concerned With	System performance	Network connectivity
Responsibility	OS installation, patching, backups	Routing, monitoring, and troubleshooting
Example	Checking running processes	Capturing and analyzing packets
🔹 Commands Demonstration:
🖥 Windows:
tasklist       # Lists all running processes
ping 192.168.1.2    # Tests network connectivity

🐧 Linux:
ps aux          # Show running processes
ping 192.168.1.2   # Connectivity check
sudo tcpdump -i eth0   # Captures network traffic

🔹 How to Perform in Lab:

Open CMD (Windows) or Terminal (Linux).

Run the above commands.

Observe and note results:

ping: Replies show network connectivity.

tasklist or ps: Shows active processes.

tcpdump: Shows live network packets.

Comment each command in your observation sheet.

1(b) Basic Wired LAN Simulation (2 PCs and 1 Switch)
🔹 Concept:

LAN allows multiple computers to connect and share resources within a small area (like a lab).

🔹 Steps to Configure in Cisco Packet Tracer:
1. Components:

2 PCs

1 Switch (e.g., 2960)

Copper straight-through cables

2. Connections:
PC0 ---- Switch ---- PC1

3. Assign IP Addresses:
Device	IP Address	Subnet Mask
PC0	192.168.10.1	255.255.255.0
PC1	192.168.10.2	255.255.255.0
4. Configure:

Click PC0 → Desktop → IP Configuration

IP = 192.168.10.1

Subnet = 255.255.255.0

Click PC1 → Desktop → IP Configuration

IP = 192.168.10.2

Subnet = 255.255.255.0

5. Test Connectivity:

Go to PC0 → Command Prompt → Type:

ping 192.168.10.2


✅ Output:

Reply from 192.168.10.2: bytes=32 time<1ms TTL=128


If you get reply = ✅ LAN working.

2(a) Basic Wired LAN Setup (Same as 1b)

Same steps as above (repeatable question).
Ensure both PCs are in same subnet and connected via switch.

2(b) Comparative Analysis (Same as 1a)

Repeat explanation from 1(a).

3(a) Wireless Network Setup (2 Laptops + Router)
🔹 Concept:

Wi-Fi LAN allows wireless communication using a router instead of a switch.

🔹 Steps in Cisco Packet Tracer:

Components:

2 Laptops

1 Wireless Router (e.g., Linksys)

Connect:

Laptops → Wireless router via SSID (wireless network)

Click Laptop → Desktop → PC Wireless → Connect to network

Assign IPs:

Device	IP Address	Subnet Mask	Gateway
Laptop0	192.168.1.2	255.255.255.0	192.168.1.1
Laptop1	192.168.1.3	255.255.255.0	192.168.1.1
Router	192.168.1.1	255.255.255.0	—

Configure Router → Wireless Settings → SSID "LabWiFi"

Verify Connectivity:
From Laptop0 → Command Prompt:

ping 192.168.1.3


✅ Output: Replies received.

3(b) Assign IPv4 Addresses and Verify

Same as 2(a) but applied to any topology.
Manually assign IP addresses and test using ping.

4(a) IPv6 Configuration
🔹 Concept:

IPv6 uses 128-bit addresses. Syntax: 2001:db8::1

🔹 Steps in Packet Tracer:

Devices: PC0, PC1, Switch

Assign IPv6 addresses:

Device	IPv6 Address	Prefix
PC0	2001:db8::1	/64
PC1	2001:db8::2	/64

Ping Test:

ping 2001:db8::2


✅ Output: Reply from 2001:db8::2: time<1ms

4(b) Wireless LAN Setup (Same as 3a)

Repeat 3(a) procedure.

5. College Network with Subnetting
🔹 Concept:

Subnetting divides an IP network into smaller subnets for departments.

Given: 192.168.10.0/24

Department	Required Hosts	Subnet	Range	Mask
Admin	50	192.168.10.0	.1–.62	/26
Comp Lab	100	192.168.10.64	.65–.126	/25
Library	30	192.168.10.128	.129–.190	/26
🔹 Steps:

Assign IPs according to subnet.

Connect all via routers/switches.

Verify with ping across departments.

✅ Output: Successful pings = all subnets communicating.

6(a) RIP vs OSPF Routing Protocols
🔹 Concept:

RIP: Distance vector, uses hop count.

OSPF: Link-state, uses Dijkstra's algorithm.

🔹 Steps in Packet Tracer:
RIP Configuration

On each router:

Router(config)# router rip
Router(config-router)# network 192.168.1.0
Router(config-router)# network 10.0.0.0

OSPF Configuration
Router(config)# router ospf 1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# network 192.168.2.0 0.0.0.255 area 0


Compare:

RIP simpler, slower convergence.

OSPF faster, scalable.

6(b) System vs Network Admin (Repeat of 1a)
7. TCP vs UDP Communication
🔹 Concept:
Protocol	Connection	Reliable	Example
TCP	Connection-oriented	Yes	HTTP, FTP, Email
UDP	Connectionless	No	DNS, Streaming, VoIP
🔹 Steps:

Create topology with:

One Server → provide DNS/FTP/HTTP

One PC (Client)

Configure IPs.

Observe:

TCP: Handshake (SYN, ACK)

UDP: Direct message, no acknowledgment

Use simulation mode → analyze packet flow.

✅ Output: TCP shows connection setup packets; UDP sends directly.

8(a) RIP Routing Protocol Simulation
🔹 Steps:

Create 3 routers connected in line.

Configure IPs for all interfaces.

Enable RIP on all routers:

Router(config)# router rip
Router(config-router)# version 2
Router(config-router)# network 192.168.1.0
Router(config-router)# network 192.168.2.0


Verify:

show ip route


✅ RIP routes visible; ping across routers successful.

8(b) Wired LAN Setup (Same as 1b)
9(a) Wireless Network (Same as 3a)
9(b) Implement RIP Routing

Follow 8(a) same steps for configuration.

10(a) TCP Client-Server Simulation (Mail Transfer)
🔹 Concept:

Simulate simple mail sending using TCP.

🔹 Steps:

Create 1 Server + 1 Client PC.

Configure server as Mail/SMTP server.

Assign IPs (same subnet).

Client sends message to server.

Observe SYN, ACK packets.

✅ Output: Message sent and acknowledged.

10(b) Wired LAN + Documentation

Same as 1(b), but include screenshots and ping results with explanation.

11(a) Analyze Network Traffic
🔹 Steps:

Create small network (2 PCs + switch).

Go to Simulation Mode in Packet Tracer.

Send ping.

Observe ICMP packets moving.

Switch to Real-time Mode to see continuous flow.

✅ Output: Show screenshots of ICMP echo request/reply.

11(b) TCP Client-Server (Same as 10a)
12. Socket Programming (TCP & UDP)
🔹 Concept:

Show practical difference using Python.

🐍 TCP Example:

server.py

import socket
s = socket.socket()
s.bind(('localhost', 9999))
s.listen(1)
c, addr = s.accept()
print("Connected:", addr)
data = c.recv(1024).decode()
print("Message:", data)
c.send(b"Received")
c.close()


client.py

import socket
s = socket.socket()
s.connect(('localhost', 9999))
s.send(b"Hello Server")
print(s.recv(1024).decode())
s.close()


Run both → shows connection-oriented data exchange.

🐍 UDP Example:

server.py

import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind(('localhost', 9999))
data, addr = s.recvfrom(1024)
print("Received:", data.decode())


client.py

import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.sendto(b"Hello UDP Server", ('localhost', 9999))


✅ UDP sends data directly, no acknowledgment.`;