// Keep result order stable and drain in-flight work before rejecting, so callers
// can safely close shared resources after a failure.
export async function mapConcurrent(items, concurrency, task) {
  if(!Number.isInteger(concurrency)||concurrency<1||concurrency>8)throw new Error('Concurrency must be an integer from 1 to 8');
  const results=new Array(items.length);
  let cursor=0,failed=false,failure;
  async function worker() {
    while(!failed && cursor<items.length) {
      const index=cursor++;
      try {results[index]=await task(items[index],index);}
      catch(error){if(!failed){failed=true;failure=error;}}
    }
  }
  await Promise.all(Array.from({length:Math.min(concurrency,items.length)},worker));
  if(failed)throw failure;
  return results;
}
