## 检查本地SSH密钥是否存在。在终端运行以下命令来检查：

cat ~/.ssh/id_rsa.pub

## 如果没有密钥，你可以使用以下命令生成一个新的SSH密钥：

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

其中your_email@example.com应替换为你的邮箱地址。

## 将SSH公钥添加到GitHub账户。首先复制你的SSH公钥内容：

cat ~/.ssh/id_rsa.pub

## 然后登录GitHub，进入Settings > SSH and GPG keys，点击"New SSH key"，将复制的内容粘贴到"Key"文本框中，并填写Title（可选），最后点击"Add SSH key"。