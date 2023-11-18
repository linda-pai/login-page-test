import { List, Card } from "antd";

const CompanyInfo = () => {
  const data = [
    {
      title: "公司資訊",
      content: [
        { title: "公司名稱", value: "ABC" },
        { title: "公司地址", value: "台北市" },
        { title: "公司電話", value: "02-12345678" },
      ],
    },
    {
      title: "聯絡我們",
      content: [
        { title: "客服電話", value: "02-12345678" },
        {
          title: "客服信箱",
          value: <a href="mailto:12345@gmail.com">mailto:12345@gmail.com</a>,
        },
      ],
    },
    {
      title: "關於我們",
      content: [
        { title: "公司簡介", value: "ABC" },
        { title: "公司地址", value: "台北市" },
      ],
    },
  ];

  return (
    <div className="home-wrapper">
      <h2>首頁</h2>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              {item.content?.map((item) => (
                <p key={item.title}>
                  {item.title}: {item.value}
                </p>
              ))}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CompanyInfo;
