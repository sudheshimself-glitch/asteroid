#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

// Configuration
const FRAMER_API_KEY = 'fr_56gd97bcmv96y8p4c7a1fcdg7b';
const PROJECT_ID = 'LPtzPpiLVfzQOuHBaXEt';
const REFERO_API_URL = 'https://api.refero.design';

// Framer API request helper
async function frameRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.framer.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Authorization': `Bearer ${FRAMER_API_KEY}`,
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: data ? JSON.parse(data) : null,
            headers: res.headers,
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data: data,
            headers: res.headers,
          });
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

// Refero API request helper
async function referoRequest(method, path, body = null, token = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.refero.design',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: data ? JSON.parse(data) : null,
            headers: res.headers,
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data: data,
            headers: res.headers,
          });
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

// Main integration function
async function integrateReferoWithFramer() {
  console.log('🚀 Starting Framer-Refero Integration...\n');

  try {
    // Step 1: Get Framer project info
    console.log('📋 Step 1: Fetching Framer project information...');
    const projectRes = await frameRequest('GET', `/v1/projects/${PROJECT_ID}`);
    if (projectRes.status !== 200) {
      console.error(`❌ Error: ${projectRes.status} - ${JSON.stringify(projectRes.data)}`);
      process.exit(1);
    }
    const framerProject = projectRes.data;
    console.log(`✅ Framer Project: ${framerProject.displayTitle}`);
    console.log(`   ID: ${framerProject.id}`);
    console.log(`   Slug: ${framerProject.slug}\n`);

    // Step 2: Explore Refero API
    console.log('🎨 Step 2: Exploring Refero API...');
    const referoExplore = await referoRequest('GET', '/api/designs');
    console.log(`✅ Refero API Status: ${referoExplore.status}`);
    if (referoExplore.status === 200) {
      console.log(`   Available designs: ${JSON.stringify(referoExplore.data, null, 2)}\n`);
    } else {
      console.log(`   Response: ${JSON.stringify(referoExplore.data)}\n`);
    }

    // Step 3: Save integration config
    console.log('💾 Step 3: Creating integration configuration...');
    const integrationConfig = {
      framer: {
        projectId: framerProject.id,
        projectSlug: framerProject.slug,
        projectUrl: framerProject.workspaceUrl,
      },
      refero: {
        apiUrl: REFERO_API_URL,
      },
      integration: {
        type: 'direct-api',
        timestamp: new Date().toISOString(),
        features: [
          'Sync design tokens from Refero',
          'Import components',
          'Fetch design data',
          'CMS integration',
        ],
      },
    };

    fs.writeFileSync('/home/user/asteroid/framer-refero-config.json', JSON.stringify(integrationConfig, null, 2));
    console.log('✅ Config saved to framer-refero-config.json\n');

    // Step 4: Display next steps
    console.log('📝 Next Steps for Framer-Refero Integration:\n');
    console.log('1. Create a custom code component in Framer');
    console.log('2. Use the Refero API to fetch design data');
    console.log('3. Sync design tokens and styles');
    console.log('4. Implement CMS collections for Refero data\n');

    console.log('✨ Integration configuration ready!');
    console.log('   Use framer-refero-config.json to connect your services\n');

  } catch (error) {
    console.error('❌ Integration failed:', error.message);
    process.exit(1);
  }
}

// Run integration
integrateReferoWithFramer();
