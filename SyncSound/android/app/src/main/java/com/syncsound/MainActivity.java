package com.example.wesmt.testp2p;

import android.content.Intent;
import android.content.Context;
import android.content.IntentFilter;
import android.app.Activity;
import android.content.BroadcastReceiver;
import android.net.wifi.WpsInfo;
import android.net.wifi.p2p.WifiP2pConfig;
import android.net.wifi.p2p.WifiP2pDevice;
import android.net.wifi.p2p.WifiP2pDeviceList;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.net.wifi.p2p.WifiP2pManager.Channel;
import android.net.wifi.p2p.WifiP2pManager;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Toast;
import java.lang.Object;
import com.example.wesmt.testp2p.DeviceListFragment;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity implements OnClickListener {


    private boolean IsWifiP2pEnabled = false;
    Channel mChannel;
    private ListView lv;
    WifiP2pManager mManager;
    private final IntentFilter intentFilter = new IntentFilter();
    private BroadcastReceiver receiver = null;

    private BroadCast peers = new BroadCast(mManager,mChannel,this);




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        //  Indicates a change in the Wi-Fi P2P status.
        intentFilter.addAction(WifiP2pManager.WIFI_P2P_STATE_CHANGED_ACTION);

        // Indicates a change in the list of available peers.
        intentFilter.addAction(WifiP2pManager.WIFI_P2P_PEERS_CHANGED_ACTION);

        // Indicates the state of Wi-Fi P2P connectivity has changed.
        intentFilter.addAction(WifiP2pManager.WIFI_P2P_CONNECTION_CHANGED_ACTION);

        // Indicates this device's details have changed.
        intentFilter.addAction(WifiP2pManager.WIFI_P2P_THIS_DEVICE_CHANGED_ACTION);


        mManager = (WifiP2pManager) getSystemService(Context.WIFI_P2P_SERVICE);
        mChannel = mManager.initialize(this, getMainLooper(), null);

        WifiP2pDevice help = new WifiP2pDevice();
        help.deviceAddress = "Test this method";
        help.deviceName = "Wes";
        help.primaryDeviceType = "phone";
        help.secondaryDeviceType = "cell";
        help.status = 1;
        peers.peers.add(0,help);

        //peers.onPeersAvailable((WifiP2pDeviceList) peers.peers);
        Button host = (Button) findViewById(R.id.listen);
        host.setOnClickListener(this);
        Button join = (Button) findViewById((R.id.join));
        join.setOnClickListener(this);

    }

    public void onClick(View v)
    {
        switch(v.getId()){
            case R.id.listen: {
                WifiP2pDeviceList trymeout = new WifiP2pDeviceList();
                peers.onPeersAvailable(trymeout);

                setContentView(R.layout.activity_main);
                lv = (ListView) findViewById(R.id.mylist);

                ArrayAdapter<WifiP2pDevice> arrayAdapter = new ArrayAdapter<WifiP2pDevice>(this, android.R.layout.simple_list_item_1, peers.peers);
                lv.setAdapter(arrayAdapter);
            }
            case R.id.join: {

                break;
            }

        }
    }

    public void onResume() {
        super.onResume();
        receiver = new BroadCast(mManager, mChannel, this);
        registerReceiver(receiver, intentFilter);
    }

    @Override
    public void onPause() {
        super.onPause();
        unregisterReceiver(receiver);
    }






    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void setIsWifiP2pEnabled(boolean b) {
        this.IsWifiP2pEnabled = b;
    }
}

