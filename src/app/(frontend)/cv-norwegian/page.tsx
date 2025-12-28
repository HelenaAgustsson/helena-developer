
import { sanityFetch } from "@/sanity/lib/live";
import { CV_NO_QUERY } from "@/sanity/lib/queries";

export default async function CVPage() {
  const { data: document } = await sanityFetch({ query: CV_NO_QUERY });

  const pdfUrl = document?.pdfFile?.asset?.url;
  
  return (
    <main >
      <div className="h-screen">
         {pdfUrl && (
        <iframe 
          src={pdfUrl}
          width="100%" 
          height="100%"
          style={{ border: 'none' }}
          title="PDF Viewer"
        />
      )}
      </div>
    </main>
  );
}