import { useParams, useNavigate } from 'react-router-dom';
import { Table as TableComponent, PageHeader, Layout } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { PropsTableTopRated } from './config';

export const Table = ({ tableProps, columns, titlePage }: PropsTableTopRated) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleTableChange = ({ current }: TablePaginationConfig) => {
    navigate(`/top-rated-films/${current}`);
    window.scrollTo(0, 0);
  };

  const title = () => <PageHeader className="site-page-header" title={titlePage} />;

  return (
    <Layout className="layout-table">
      <TableComponent
        onChange={handleTableChange}
        rowKey="id"
        size="middle"
        bordered
        columns={columns}
        dataSource={tableProps}
        title={title}
        pagination={{
          current: Number(id),
          pageSize: 20,
          total: 500,
          showSizeChanger: false,
          showQuickJumper: true,
          size: 'default',
        }}
      />
    </Layout>
  );
};
