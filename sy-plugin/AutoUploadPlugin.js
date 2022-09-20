const { NodeSSH } = require("node-ssh");
class AutoUploadPlugin {
  constructor(options) {
    this.ssh = new NodeSSH();
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "AutoUploadPlugin",
      async (compilation, callback) => {
        // 1. 获取要输出的文件夹
        const outputPath = compilation.outputOptions.path;
        // 2. 连接服务器(ssh连接) (node-ssh)
        await this.connectServer();
        // 3. 删除原来目录中的所有内容
        // const serverDir = "/root/test";
        const serverDir = this.options.remotePath;
        await this.ssh.execCommand(`rm -rh ${serverDir}/*`);
        // 4.上传文件到服务器(ssh连接)
        await this.uploadFiles(outputPath, serverDir);
        // 关闭ssh
        this.ssh.dispose();

        console.log("内容已经上传服务器了");
        callback();
      }
    ); // afterEmit 阶段静态文件生成结束
  }
  async connectServer() {
    await this.ssh.connect({
      host: this.options.host,
      username: this.options.username,
      password: this.options.password,
    });
    console.log("连接成功");
  }
  async uploadFiles(localPath, remotePath) {
    await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true,
      concurrency: 10,
    });
    console.log("传送涛服务器:", status ? "成功" : "失败");
  }
}

module.exports = AutoUploadPlugin;
