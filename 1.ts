type rules = Array<rule>

type rule =
  {
    test: RegExp; // 约束当前rule匹配哪些资源 通常是匹配文件格式的正则
    include?: RegExp | string | Array<string>; // 匹配符合条件的模块 通常是路径
    exclude?: RegExp | string | Array<string>; // 屏蔽符合条件的模块 通常是路径
    type?: string; // 匹配资源模块类型 详见https://webpack.docschina.org/guides/asset-modules/
    use: Array<UseEntry>; // 配置当前rule匹配到的资源模块将会调用那些loader解析,调用顺序为倒序
    generator?: {
      filename?: string; // 决定了输出文件的名称
    };
    parser?: {
      dataUrlCondition?: {
        maxSize: number; // 文件大小小于maxSize的模块会被作为一个 Base64 编码的字符串注入到包中， 否则模块文件会被生成到输出的目标目录中。
      }
    };
    oneOf?: Array<rule>; // 表示只使用用第一个匹配到的规则,用来节约性能
  }

type UseEntry = string | {
  loader: string; // 指定loader
  options?: string | object; // loader 选项
}
