import { usePassport } from "@/hooks/usePassport";

export default function TestPage() {
  const {passport} = usePassport('4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370')

  const testFn = async () => {
    console.log('passport start')
    await passport.setupEncryption()
    console.log('passport setup encryption', passport)
    const res = await passport.register({
      userDisplayName: 'test',
      username: 'test',
    });
    console.log(res);
  }

  return (
    <div>
        <button onClick={() => testFn()}>Test</button>
        <div>Test Page</div>
    </div>
  );
}
