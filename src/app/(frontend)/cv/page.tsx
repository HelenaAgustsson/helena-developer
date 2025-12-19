
import { sanityFetch } from "@/sanity/lib/live";
import { PDF_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function CVPage() {
  const { data: documents } = await sanityFetch({ query: PDF_QUERY });

  const pdfUrl = documents[0]?.pdfFile?.asset?.url;

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
