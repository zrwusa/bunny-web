import DataGrid from '../../../../../shared/components/bunny-ui/composites/datagrid/DataGrid';

const Page = async () => {
  const accessToken =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJiY2M3YTc5LWIwNzktNDQyMC05NDYwLTA5ZTZmODdiNGYxYyIsImNyZWF0ZV9hdCI6IjIwMjQtMDktMDRUMTQ6MjU6MzUuOTY5WiIsInVwZGF0ZV9hdCI6IjIwMjQtMDktMDRUMTQ6MjU6MzUuOTY5WiIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsIm5hbWUiOiJQYWJsbyBSaW9zIiwiaWF0IjoxNzI1NTAzMTU5LCJleHAiOjE3MjU1MDY3NTl9.D_TIXZ3gwlw8-jQFPNCF0or58sflf72fK8rk5qLZwDVdyK9HhXYJsHHvq1OIUXYBhSK_ArP_p5SJdurfHGgH6j7oFmIhZ7ECcJgkw_4AE2otKgZUtZJWg578KiCFriPButp49RkT1lgP_tYpsQIwjnyNpdM_3W5u6ngK6YcAJ3ox-nSF96V_oPcUYvApYsbdYRIldxUDu05gbe1w59OztR48IMia6vKU1AVxLGObH5pRjPrlXwZ7a4AH6nUzTMXp4vAVu0UhzUVxCai1nwHX-mQhqfZbRR18WKLcaD3QHu6otjt_wYxcjZtMHFykuZ4H6xjDgyErfcGxsdfnHXHquMIEePp1CxKdLJVYVovUwvU7G_-w0cD69zKz6ga0SKpPeqRyNYtlk_ffG-X28fiIfa1PIthppOhMc3dAd3sc8cvjgd7ruH0SdYpFuz8uKomK5OUz-OBwKXzncUD3glmOIL833PotvtmrTcmGQ-wYNF64Dk0O6Viap1VmDFKAKCUrLxNY-ymTe1MYU8FWO6YNbLf7RreGhaJNxy_IXjtIOzUKd1-S7JyiZCKMWBid-ze9BWGf0VtEeVLHh4fJP3vBDIVYpa5Ez_Ov-RmXsJC3bw_a1r2s8erfEucFr3-ajQBjavoKrgvPhOCMGapdQM1-RHjb1TySsBOO9k5z7ndHExs';
  const res = await fetch(
    'http://localhost:8080/api/v1/products?skip=0&take=10',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // 'Content-Type': 'application/json',
      },
      cache: 'no-store',
    },
  );
  const data = await res.json();

  return (
    <div className="flex-grow">
      <DataGrid data={data.resData}></DataGrid>
    </div>
  );
};

export default Page;
